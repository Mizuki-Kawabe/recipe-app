import { useEffect, useState } from "react";
import { client } from "./api";
import {
  ListRecipesRequest,
  CreateRecipeRequest,
  Recipe,
  Ingredient,
} from "./grpc/recipe_pb";

export default function App() {
  const [recipes, setRecipes] = useState<Recipe.AsObject[]>([]);
  const [title, setTitle] = useState("");

  const fetchList = async () => {
    const req = new ListRecipesRequest();
    req.setPage(1);
    req.setPageSize(50);
    const res = await client.listRecipes(req, {});
    setRecipes(res.getRecipesList().map((r) => r.toObject()));
  };

  const create = async () => {
    const recipe = new Recipe();
    recipe.setTitle(title);
    recipe.setDescription("");
    const ing = new Ingredient();
    ing.setName("塩");
    ing.setAmount("少々");
    recipe.setIngredientsList([ing]);

    const req = new CreateRecipeRequest();
    req.setRecipe(recipe);
    await client.createRecipe(req, {});
    setTitle("");
    await fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div
      style={{ maxWidth: 720, margin: "2rem auto", fontFamily: "system-ui" }}
    >
      <h1>🍳 Recipes</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="レシピ名"
        />
        <button onClick={create} disabled={!title}>
          追加
        </button>
      </div>
      <ul>
        {recipes.map((r) => (
          <li
            key={r.id}
            style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
          >
            <strong>{r.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
