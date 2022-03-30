import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CharacterDetails.module.css";

export default function CharacterDetails({ propId }) {
  const params = useParams();
  let id = undefined;

  if (params.id) {
    id = params.id;
  } else {
    id = propId;
  }

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [character, setCharacter] = useState();
  const [planet, setPlanet] = useState();
  const [films, setFilms] = useState([]);

  async function getFilms(promise) {
    let data = await promise.json();
    setFilms((films) => [...films, data.title]);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        //fetch all data for character
        const characterData = await fetch(`https://swapi.dev/api/people/${id}`);
        const character = await characterData.json();
        setCharacter(character);

        //fetch character planet using endpoint from previous fetch data
        const planetData = await fetch(`${character.homeworld}`);
        const planet = await planetData.json();
        setPlanet(planet.name);

        //fetch all films using multiple endpoints from previous fetch data
        const filmsData = await Promise.all(
          character.films.map((films) => fetch(films))
        );
        filmsData.forEach((promise) => {
          getFilms(promise);
        });

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (loading && !error) {
    return <p>Loading...</p>;
  } else if (!loading || (character && planet && films && films.length > 0)) {
    return (
      <div className={style.characterContainer}>
        <h1 id={style.h1}>{character.name}</h1>
        <p>Home planet: {planet}</p>
        <p>Hair colour: {character.hair_color}</p>
        <p>Eye colour: {character.eye_color}</p>
        <p>Gender: {character.gender}</p>
        <h2 className={style.h2}>Character Films:</h2>
        <ul>
          {films.map((item) => {
            return (
              <li className={style.listItem} key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (error) {
    return <p>Failed trying to fetch data</p>;
  }
}

/* interface CharacterList {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  } */
