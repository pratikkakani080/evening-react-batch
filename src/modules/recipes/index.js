import React, { useEffect, useState } from "react";
import { ApiInstance } from "../../common/utils/api";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    // apiCallByFetch();
    apiCallByAxios();
  }, []);

  const apiCallByAxios = async () => {
    const res = await ApiInstance.get("/recipes");
    console.log("res by axios**", res.data);
    setRecipes(res.data?.recipes || []);
  };

  const apiCallByFetch = () => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => console.log("res by fetch**", res))
      .catch();
  };
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <>
            <h4>{recipe.name}</h4>
            <img src={recipe.image} height={100} width={100} />
          </>
        );
      })}
    </div>
  );
}

export default Recipes;
