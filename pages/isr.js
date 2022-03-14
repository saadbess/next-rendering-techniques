import React from "react";
import PokemonCard from "../components/PokemonCard";
import Nav from "../components/Nav";
import styles from "../styles/Pokemon.module.css";

export function ISR({ pokemons }) {
  return (
    <div style={{ padding: "2rem 0" }}>
      <Nav />
      <div style={{ padding: "0 1rem" }}>
        <h1 className={styles.heading}> My Pokemons </h1>
        <ul className={styles.pokemonList}>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <PokemonCard
                index={index}
                name={pokemon.name}
                image={pokemon.image}
              ></PokemonCard>
            ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await res.json();
  //map pokemons data to have images
  let pokemons = data.results.map((result, index) => {
    const paddedIndex = ("00" + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    return {
      ...result,
      image,
    };
  });
  return {
    props: { pokemons },
  };
};

export default ISR;
