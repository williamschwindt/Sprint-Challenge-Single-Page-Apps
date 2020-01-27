import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios
      .get("https://rickandmortyapi.com/api/character/")

      .then((res) => {
        console.log(res);
        setCharacters(res.data.results);
      })

      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <section className="character-list">
      <nav>
        <Link className="link" to="/">Home</Link>
      </nav>
      {
        <SearchForm characters={characters} />
      })
    </section>
  );
}
