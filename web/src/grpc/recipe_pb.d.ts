import * as jspb from 'google-protobuf'



export class Ingredient extends jspb.Message {
  getName(): string;
  setName(value: string): Ingredient;

  getAmount(): string;
  setAmount(value: string): Ingredient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ingredient.AsObject;
  static toObject(includeInstance: boolean, msg: Ingredient): Ingredient.AsObject;
  static serializeBinaryToWriter(message: Ingredient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ingredient;
  static deserializeBinaryFromReader(message: Ingredient, reader: jspb.BinaryReader): Ingredient;
}

export namespace Ingredient {
  export type AsObject = {
    name: string;
    amount: string;
  };
}

export class Recipe extends jspb.Message {
  getId(): string;
  setId(value: string): Recipe;

  getTitle(): string;
  setTitle(value: string): Recipe;

  getDescription(): string;
  setDescription(value: string): Recipe;

  getIngredientsList(): Array<Ingredient>;
  setIngredientsList(value: Array<Ingredient>): Recipe;
  clearIngredientsList(): Recipe;
  addIngredients(value?: Ingredient, index?: number): Ingredient;

  getStepsList(): Array<string>;
  setStepsList(value: Array<string>): Recipe;
  clearStepsList(): Recipe;
  addSteps(value: string, index?: number): Recipe;

  getCreatedAt(): number;
  setCreatedAt(value: number): Recipe;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recipe.AsObject;
  static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
  static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recipe;
  static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
  export type AsObject = {
    id: string;
    title: string;
    description: string;
    ingredientsList: Array<Ingredient.AsObject>;
    stepsList: Array<string>;
    createdAt: number;
    updatedAt: number;
  };
}

export class GetRecipeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRequest): GetRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRequest;
  static deserializeBinaryFromReader(message: GetRecipeRequest, reader: jspb.BinaryReader): GetRecipeRequest;
}

export namespace GetRecipeRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetRecipeResponse extends jspb.Message {
  getRecipe(): Recipe | undefined;
  setRecipe(value?: Recipe): GetRecipeResponse;
  hasRecipe(): boolean;
  clearRecipe(): GetRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeResponse): GetRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeResponse;
  static deserializeBinaryFromReader(message: GetRecipeResponse, reader: jspb.BinaryReader): GetRecipeResponse;
}

export namespace GetRecipeResponse {
  export type AsObject = {
    recipe?: Recipe.AsObject;
  };
}

export class ListRecipesRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListRecipesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRecipesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesRequest): ListRecipesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesRequest;
  static deserializeBinaryFromReader(message: ListRecipesRequest, reader: jspb.BinaryReader): ListRecipesRequest;
}

export namespace ListRecipesRequest {
  export type AsObject = {
    page: number;
    pageSize: number;
  };
}

export class ListRecipesResponse extends jspb.Message {
  getRecipesList(): Array<Recipe>;
  setRecipesList(value: Array<Recipe>): ListRecipesResponse;
  clearRecipesList(): ListRecipesResponse;
  addRecipes(value?: Recipe, index?: number): Recipe;

  getTotal(): number;
  setTotal(value: number): ListRecipesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesResponse): ListRecipesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesResponse;
  static deserializeBinaryFromReader(message: ListRecipesResponse, reader: jspb.BinaryReader): ListRecipesResponse;
}

export namespace ListRecipesResponse {
  export type AsObject = {
    recipesList: Array<Recipe.AsObject>;
    total: number;
  };
}

export class CreateRecipeRequest extends jspb.Message {
  getRecipe(): Recipe | undefined;
  setRecipe(value?: Recipe): CreateRecipeRequest;
  hasRecipe(): boolean;
  clearRecipe(): CreateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRequest): CreateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRequest, reader: jspb.BinaryReader): CreateRecipeRequest;
}

export namespace CreateRecipeRequest {
  export type AsObject = {
    recipe?: Recipe.AsObject;
  };
}

export class CreateRecipeResponse extends jspb.Message {
  getRecipe(): Recipe | undefined;
  setRecipe(value?: Recipe): CreateRecipeResponse;
  hasRecipe(): boolean;
  clearRecipe(): CreateRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeResponse): CreateRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeResponse;
  static deserializeBinaryFromReader(message: CreateRecipeResponse, reader: jspb.BinaryReader): CreateRecipeResponse;
}

export namespace CreateRecipeResponse {
  export type AsObject = {
    recipe?: Recipe.AsObject;
  };
}

export class UpdateRecipeRequest extends jspb.Message {
  getRecipe(): Recipe | undefined;
  setRecipe(value?: Recipe): UpdateRecipeRequest;
  hasRecipe(): boolean;
  clearRecipe(): UpdateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRequest): UpdateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRequest, reader: jspb.BinaryReader): UpdateRecipeRequest;
}

export namespace UpdateRecipeRequest {
  export type AsObject = {
    recipe?: Recipe.AsObject;
  };
}

export class UpdateRecipeResponse extends jspb.Message {
  getRecipe(): Recipe | undefined;
  setRecipe(value?: Recipe): UpdateRecipeResponse;
  hasRecipe(): boolean;
  clearRecipe(): UpdateRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeResponse): UpdateRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeResponse;
  static deserializeBinaryFromReader(message: UpdateRecipeResponse, reader: jspb.BinaryReader): UpdateRecipeResponse;
}

export namespace UpdateRecipeResponse {
  export type AsObject = {
    recipe?: Recipe.AsObject;
  };
}

export class DeleteRecipeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRequest): DeleteRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRequest, reader: jspb.BinaryReader): DeleteRecipeRequest;
}

export namespace DeleteRecipeRequest {
  export type AsObject = {
    id: string;
  };
}

export class DeleteRecipeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeResponse): DeleteRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeResponse;
  static deserializeBinaryFromReader(message: DeleteRecipeResponse, reader: jspb.BinaryReader): DeleteRecipeResponse;
}

export namespace DeleteRecipeResponse {
  export type AsObject = {
  };
}

