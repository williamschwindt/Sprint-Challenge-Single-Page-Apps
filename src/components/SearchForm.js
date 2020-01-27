import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({ characters }) {
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    let currentCharacters = [];
    let newCharacters = [];

    if (e.target.value !== "") {
      newCharacters = filteredItems.filter(person => {
        const lowerCase = person.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lowerCase(filter);
      });

      setFilteredItems(newCharacters);
    }
  };

  const search = (e) => {
    e.preventDefault();
  };



  return (
    <section className="search-form">
      <form>
        <input placeholder="search" type="text" name="search" onChange={handleChange} ></input>
        <button type="submit" onClick={search} >Submit</button>
      </form>
      {
        filteredItems.map(character => {
          return <CharacterCard key={character.id} character={character} />
        })
      }
    </section>
  );
}
