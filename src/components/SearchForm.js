import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({ characters }) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(characters);
  }, [characters])

  const handleChange = (e) => {
    let currentCharacters = [];
    let newCharacters = [];

    if (e.target.value !== "") {
      currentCharacters = characters;

      newCharacters = currentCharacters.filter(person => {
        const lowerCase = person.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lowerCase.includes(filter);
      });
    } else {
        newCharacters = characters;
      };

      setFilteredItems(newCharacters);
  };

  return (
    <section className="search-form">
      <form>
        <input placeholder="search" type="text" name="search" onChange={handleChange} ></input>
      </form>
      <div className="characters" >
        {
          filteredItems.map(character => {
            return <CharacterCard key={character.id} character={character} />
          })
        }
      </div>
    </section>
  );
}
