import React, { forwardRef } from "react";

const RecipeCard = forwardRef(function NewComp({ handleClick, recipe }, ref) {
  console.log("ref***", ref);

  return (
    <div>
      <h4 onClick={handleClick}>{recipe.name}</h4>
      <img src={recipe.image} height={100} width={100} />
    </div>
  );
});

export default RecipeCard;
