import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CharacterDetails.module.css";

export default function CharacterDetails({ propId }) {
  const params = useParams();
  let characterId = undefined;

  params.id ? (characterId = params.id) : (characterId = propId);

  const URL = `https://swapi.dev/api/people/${characterId}`;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [character, setCharacter] = useState(undefined);
  const [planet, setPlanet] = useState(undefined);
  const [films, setFilms] = useState([]);

  async function getFilms(promise) {
    let data = await promise.json();
    setFilms((films) => [...films, data.title]);
  }

  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      try {
        //fetch all data for a single character
        const characterData = await fetch(URL);
        const character = await characterData.json();
        if (!isCancelled) {
          setCharacter(character);
        }

        //fetch a single planet using endpoint from previous fetch data
        const planetData = await fetch(`${character.homeworld}`);
        const planet = await planetData.json();
        if (!isCancelled) {
          setPlanet(planet.name);
        }

        //fetch all films using multiple endpoints from previous fetch data
        const filmsData = await Promise.all(
          character.films.map((films) => fetch(films))
        );
        if (!isCancelled) {
          filmsData.forEach((promise) => {
            getFilms(promise);
          });
          setLoading(false);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();

    //cleanup function
    return () => {
      isCancelled = true;
    };
  }, []);

  if (loading && !error) {
    return <p className={style.loadingFailParagraph}>Loading...</p>;
  } else if (!loading || (character && planet && films.length > 0)) {
    return (
      <div className={style.characterContainer}>
        <h1 id={style.h1}>{character.name}</h1>
        <p>Home planet: {planet}</p>
        <p>Hair colour: {character.hair_color}</p>
        <p>Eye colour: {character.eye_color}</p>
        <p>Gender: {character.gender}</p>
        <h2 className={style.h2}>Character Films:</h2>
        <ul>
          {films.map((film, index) => {
            return (
              <li className={style.listItem} key={film + index}>
                {film}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (error) {
    return (
      <p className={style.loadingFailParagraph}>Failed trying to fetch data</p>
    );
  }
}
