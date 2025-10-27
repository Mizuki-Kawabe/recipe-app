// web/src/api.ts など
import { RecipeServiceClient } from "./grpc/RecipeServiceClientPb";
import { ListRecipesRequest } from "./grpc/recipe_pb";

export const client = new RecipeServiceClient("http://localhost:8080");
