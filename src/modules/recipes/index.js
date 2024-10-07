import React, { useEffect, useRef, useState } from "react";
import { ApiInstance } from "../../common/utils/api";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const ref = useRef({});

  useEffect(() => {
    // apiCallByFetch();
    apiCallByAxios();
  }, []);

  const handleTitleClick = () => {
    ref.current.style.backgroundColor = "red";
    console.log("ref**", ref.current.style.backgroundColor);
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
      {recipes.map((recipe) => {
        return (
          <>
            <h4 ref={ref} onClick={handleTitleClick}>
              {recipe.name}
            </h4>
            <img src={recipe.image} height={100} width={100} />
          </>
        );
      })}
    </div>
  );
}

export default Recipes;
