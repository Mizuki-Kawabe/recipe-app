import { RecipeServiceClient } from "./grpc/RecipeServiceClientPb";

export const client = new RecipeServiceClient(
  "http://localhost:8080",
  null,
  null
);
