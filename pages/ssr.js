import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Pokemon from "../components/Pokemon";
import styles from "../styles/Ssg.module.css";

export default function SSR({ pokemon }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSR Pokemon</title>
      </Head>
      <Nav />
      <div className={styles.pokemonList}>
        {pokemon.results.map((monster, index) => (
          <Pokemon key={index} pokemon={monster} index={index} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");

  return {
    props: {
      pokemon: await res.json(),
    },
  };
}
