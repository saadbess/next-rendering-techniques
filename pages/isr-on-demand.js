import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Ssg.module.css";
import Image from "next/image";


export default function ISROnDemand({ pokemons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ISR Pokemon</title>
      </Head>
      <Nav />
      <div className={styles.pokemonList}>
        {pokemons && pokemons.data.map((pokemon, index) => (
          <div key={index} className={styles.pokemonCard}>
            <Image
              width={300}
              height={300}
              src={pokemon?.attributes?.url}
              alt={pokemon?.attributes?.name} />
            <span>#00{index} </span>
            {pokemon?.attributes?.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://api-t3m50.strapidemo.com/api/pokemon-apis");
    return {
      props: {
        pokemons: await res.json(),
      },
    };
  }
  catch {
    return {
      props: {
      },
    }
  }
}

