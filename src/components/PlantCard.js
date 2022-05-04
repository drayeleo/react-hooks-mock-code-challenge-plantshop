import React, { useState } from "react";

function PlantCard({ plant, handleSetPrice, handleDeletePlant }) {
  const [inStock, setInStock] = useState(true);
  const [editPrice, setEditPrice] = useState(false);
  const [price, setPrice] = useState(plant.price); //need to get rid of price state and update plants state? see note in app

  function onPriceSubmit() {
    setEditPrice(!editPrice)
    handleSetPrice(plant.id, price);
  }

  function buildPriceElement() {
    return (
      editPrice ?
        <>
          <input
            type="text"
            name="new-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <button onClick={onPriceSubmit} >Set Price</button>
        </>
        :
        <p onClick={() => setEditPrice(!editPrice)} >
          Price: {price}
          <span style={{ fontSize: "75%" }}> (click to edit)</span>
        </p>
    )
  }

  function buildInStockButton() {
    return inStock ? (
      <button className="primary" onClick={() => setInStock(!inStock)} >In Stock</button>
    ) : (
      <button onClick={() => setInStock(!inStock)} >Out of Stock</button>
    )
  }

  function buildDeleteButton() {
    return <button onClick={() => handleDeletePlant(plant.id)} >Delete</button>
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {buildPriceElement()}
      {buildInStockButton()}
      {buildDeleteButton()}
    </li>
  );
}

export default PlantCard;
