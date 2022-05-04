import React from "react";

function Search( {handleChangeSearch, search} ) {
  

  // function onChangeSearch(event) {
  //   setSearch(event.target.value)
  //   handleChangeSearch(search)
  // }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => handleChangeSearch(e)}
      />
    </div>
  );
}

export default Search;
