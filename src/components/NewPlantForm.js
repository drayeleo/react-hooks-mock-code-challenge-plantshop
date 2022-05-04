import React, { useState } from "react";

function NewPlantForm( {handleSubmitNewPlant} ) {
  const [inputValues, setInputValues] = useState({name: "", image: "", price: ""});
  // const [nameInput, setNameInput] = useState("");
  // const [imageInput, setImageInput] = useState("");
  // const [priceInput, setPriceInput] = useState("");

  function handleInputChange(event) {
    setInputValues({...inputValues, [event.target.name]: event.target.value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => handleSubmitNewPlant(event, inputValues)} >
        <input type="text" name="name" placeholder="Plant name" value={inputValues.name} onChange={(event) => handleInputChange(event)} />
        <input type="text" name="image" placeholder="Image URL" value={inputValues.image} onChange={(event) => handleInputChange(event)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={inputValues.price} onChange={(event) => handleInputChange(event)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
