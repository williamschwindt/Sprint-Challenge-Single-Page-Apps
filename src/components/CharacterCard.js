import React from "react";
import styled from "styled-components";

const Character = styled.div`
  width: 400px;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 80%;
  height: 80%
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-size: 30px;
`;

export default function CharacterCard({ character }) {
  return (
    <Character>
      <H2>{character.name}</H2>
      <Img className="img" src={character.image} alt={character.name} />
    </Character>
  );
}
