import React, { useState } from "react";
import NewRecipeForm from "../components/NewRecipeForm/NewRecipeForm";

function NewRecipePage() {
  const [isFormValid] = useState();
  return (
    <div>
      <NewRecipeForm />
    </div>
  );
}

export default NewRecipePage;
