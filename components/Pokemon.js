import React from "react";
import Image from "next/image";
import styles from "../styles/Ssg.module.css";

const Pokemon = ({ pokemon, index }) => {
  const pokeIndex = ("000" + (index + 1)).slice(-3);

  return (
    <div className={styles.pokemonCard}>
      <Image
        width={300}
        height={300}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
        alt={pokemon.name}
      />
      <span>#{pokeIndex} </span>
      {pokemon.name}
    </div>
  );
};

export default Pokemon;
