import React, { useEffect, useRef, useState } from "react";
import { ApiInstance } from "../../common/utils/api";
import Input from "../../common/components/input";
import RecipeCard from "./recipeCard";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [testValue, setTestValue] = useState();
  const ref = useRef({});

  console.log("ref**", ref);

  useEffect(() => {
    // apiCallByFetch();
    apiCallByAxios();
  }, []);

  const handleTitleClick = () => {
    // ref.current.innerText = "red";
    // ref.current.style.backgroundColor = "red";
    console.log("ref**", ref);
  };

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
      <Input
        type="text"
        name="test"
        onChange={(e) => {
          ref.current = e.target.value;
          setTestValue(e.target.value);
        }}
        value={testValue}
        inputLabel="test"
        isError={false}
      />
      {recipes.map((recipe) => {
        return (
          <>
            <RecipeCard
              handleClick={handleTitleClick}
              recipe={recipe}
              ref={ref}
            />
          </>
        );
      })}
    </div>
  );
}

export default Recipes;
