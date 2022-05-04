import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, handleSetPrice, handleDeletePlant } ) {
  const buildPlantList = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} handleSetPrice={handleSetPrice} handleDeletePlant={handleDeletePlant} />
  })

  return (
    <ul className="cards">{buildPlantList}</ul>
  );
}

export default PlantList;
