import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Info = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <nav>
          <Link className="link" to="/characters" >View Characters</Link>
        </nav>
        <Div>
          <img
            className="img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <Info>
            <h2>Rick Sanchez</h2>
            <p>Currently: Alive</p>
            <p>Species: Human</p>
          </Info>
        </Div>
      </header>
    </section>
  );
}
