//link to assingment: https://learning.flatironschool.com/courses/5179/assignments/179391?module_item_id=396335

import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");


  const url = 'http://localhost:6001/plants/';


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPlants(data);
      });
  }, [])


  function handleSubmitNewPlant(event, newPlant) {
    event.preventDefault();
    //console.log(newPlant);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setPlants([...plants, data])
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value);
  }

  //I may need to add another function, "onChangePrice", to run setPlants as 
  //the new price is entered in the form in PlantCard (making it a controlled 
  //input). However, that would mean that if I don't submit, the change stays 
  //in the plants state anyways. I don't think I really want that, and this
  //way is simpler 

  function handleSetPrice(plantId, plantPrice) {
    console.log("plant id: ", plantId, "plant price: ", plantPrice);

    const obj = { price: plantPrice };

    fetch(url + plantId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        //setPlants([...plants, data])
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function handleDeletePlant(plantId) {
    console.log("plant id to delete: ", plantId);

    fetch(url + plantId, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch((error) => {
        console.error('Error:', error);
      });

    setPlants(plants.filter(plant => plant.id !== plantId))
  }

  const plantsToDisplay = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plantsToDisplay}
        handleSubmitNewPlant={handleSubmitNewPlant}
        handleChangeSearch={handleChangeSearch}
        search={search}
        handleSetPrice={handleSetPrice}
        handleDeletePlant={handleDeletePlant}
      />
    </div>
  );
}

export default App;

/*
App
  Header
  PlantPage
    NewPlantForm
    Search
    PlantList
*/