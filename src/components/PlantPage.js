import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( {plants, handleSubmitNewPlant, handleChangeSearch, search, handleSetPrice, handleDeletePlant} ) {
  return (
    <main>
      <NewPlantForm handleSubmitNewPlant={handleSubmitNewPlant} />
      <Search handleChangeSearch={handleChangeSearch} search={search} />
      <PlantList plants={plants} handleSetPrice={handleSetPrice} handleDeletePlant={handleDeletePlant} />
    </main>
  );
}

export default PlantPage;
