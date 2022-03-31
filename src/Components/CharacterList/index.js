import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./CharacterList.module.css";

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characters, setCharacters] = useState(undefined);
  const [planets, setPlanets] = useState([]);

  const URL = "https://swapi.dev/api/people/";

  async function getPlanets(promise) {
    const data = await promise.json();
    setPlanets((planets) => [...planets, data.name]);
  }

  useEffect(() => {
    let isCancelled = false;

    async function fetchData() {
      try {
        //fetch data for multiple characters
        const charactersData = await fetch(URL);
        const characters = await charactersData.json();
        if (!isCancelled) {
          setCharacters(characters.results);
        }

        //fetch all planets using multiple endpoints from previous fetch data
        const planetsData = await Promise.all(
          characters.results.map((character) => fetch(character.homeworld))
        );
        if (!isCancelled) {
          planetsData.forEach((promise) => {
            getPlanets(promise);
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
  }
  if (!loading || (characters && planets.length > 0)) {
    return characters.map((character, index) => {
      const id = character.url.slice(29);
      return (
        <div
          className={style.characterListWrapper}
          key={character.name + index}
        >
          <Link className={style.links} to={`/character/${id}`}>
            {character.name}
          </Link>
          <p>Home Planet: {planets[index]}</p>
          <p>Gender: {character.gender}</p>
        </div>
      );
    });
  }
  if (error) {
    return (
      <p className={style.loadingFailParagraph}>Failed trying to fetch data</p>
    );
  }
}
