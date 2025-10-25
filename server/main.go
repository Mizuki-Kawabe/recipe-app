package main

func (s *recipeServer) ListRecipes(ctx context.Context, req *pb.ListRecipesRequest) (*pb.ListRecipesResponse, error) {
	page := int(req.GetPage())
	if page < 1 {
		page = 1
	}
	size := int(req.GetPageSize())
	if size <= 0 {
		size = 20
	}
	offset := (page - 1) * size
	items, total := s.store.List(offset, size)
	res := make([]*pb.Recipe, 0, len(items))
	for _, it := range items {
		res = append(res, toPB(it))
	}
	return &pb.ListRecipesResponse{Recipes: res, Total: int32(total)}, nil
}

func (s *recipeServer) CreateRecipe(ctx context.Context, req *pb.CreateRecipeRequest) (*pb.CreateRecipeResponse, error) {
	r := fromPB(req.GetRecipe())
	created, err := s.store.Create(r)
	if err != nil {
		return nil, err
	}
	return &pb.CreateRecipeResponse{Recipe: toPB(created)}, nil
}

func (s *recipeServer) UpdateRecipe(ctx context.Context, req *pb.UpdateRecipeRequest) (*pb.UpdateRecipeResponse, error) {
	u := fromPB(req.GetRecipe())
	upd, err := s.store.Update(u)
	if err != nil {
		return nil, err
	}
	return &pb.UpdateRecipeResponse{Recipe: toPB(upd)}, nil
}

func (s *recipeServer) DeleteRecipe(ctx context.Context, req *pb.DeleteRecipeRequest) (*pb.DeleteRecipeResponse, error) {
	if err := s.store.Delete(req.GetId()); err != nil {
		return nil, err
	}
	return &pb.DeleteRecipeResponse{}, nil
}

func toPB(r Recipe) *pb.Recipe {
	ing := make([]*pb.Ingredient, 0, len(r.Ingredients))
	for _, i := range r.Ingredients {
		ing = append(ing, &pb.Ingredient{Name: i.Name, Amount: i.Amount})
	}
	return &pb.Recipe{
		Id: r.ID, Title: r.Title, Description: r.Description,
		Ingredients: ing, Steps: r.Steps,
		CreatedAt: r.CreatedAt, UpdatedAt: r.UpdatedAt,
	}
}

func fromPB(r *pb.Recipe) Recipe {
	ing := make([]Ingredient, 0, len(r.GetIngredients()))
	for _, i := range r.GetIngredients() {
		ing = append(ing, Ingredient{Name: i.GetName(), Amount: i.GetAmount()})
	}
	return Recipe{
		ID: r.GetId(), Title: r.GetTitle(), Description: r.GetDescription(),
		Ingredients: ing, Steps: r.GetSteps(),
		CreatedAt: r.GetCreatedAt(), UpdatedAt: r.GetUpdatedAt(),
	}
}

func main() {
	addr := ":50051"
	if v := os.Getenv("GRPC_ADDR"); v != "" {
		addr = v
	}

	store, err := NewStorage("./data")
	if err != nil {
		log.Fatal(err)
	}

	lis, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatal(err)
	}
	grpcServer := grpc.NewServer()
	pb.RegisterRecipeServiceServer(grpcServer, &recipeServer{store: store})
	log.Printf("gRPC listening on %s", addr)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal(err)
	}
}
