import React, {useState, useEffect} from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Pokemon from "../components/Pokemon";
import styles from "../styles/Ssg.module.css";

export default function CSR() {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!pokemon) return <p>No Pokemon data</p>

  return (
    <div className={styles.container}>
      <Head>
        <title>CSR Pokemon</title>
      </Head>
      <Nav />
      <div className={styles.pokemonList}>
        {pokemon.results.map((monster, index) => (
          <Pokemon key={index} pokemon={monster} index={index} />
        ))}
      </div>
    </div>
  )
}