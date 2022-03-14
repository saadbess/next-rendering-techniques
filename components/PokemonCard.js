import Link from "next/link";
import styles from "../styles/Pokemon.module.css";


export function PokemonCard({index, image, name}){
    return (
    <li key={index} style={{ padding: "1rem" }}>
        <Link href={`/pokemon/${index + 1}`}>
          <a>
            <img src={image} alt={name} height={300} width={300} />
            <h3 className={styles.pokemonTitle}>
              {name}
            </h3>
          </a>
        </Link>
      </li>
    )
}
export default PokemonCard;