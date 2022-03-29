import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./CharacterList.module.css";

export default function CharacterList() {
  const [characters, setCharacters] = useState(undefined);
  const [planets, setPlanets] = useState([]);

  async function getPlanets(promise) {
    const data = await promise.json();
    setPlanets((planets) => [...planets, data.name]);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        //fetch all characters data
        const charactersData = await fetch("https://swapi.dev/api/people/");
        const characters = await charactersData.json();
        setCharacters(characters.results);

        //fetch all films using multiple endpoints from previous fetch data
        const planetsData = await Promise.all(
          characters.results.map((character) => fetch(character.homeworld))
        );
        planetsData.forEach((promise) => {
          getPlanets(promise);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (characters && planets && planets.length > 0) {
    return characters.map((item, index) => {
      const id = item.url.slice(29);
      return (
        <div className={style.characterListWrapper} key={item.name}>
          <Link className={style.links} to={`/character/${id}`}>
            {item.name}
          </Link>
          <p>Home Planet: {planets[index]}</p>
          <p>Gender: {item.gender}</p>
        </div>
      );
    });
  } else {
    return <p>Loading...</p>;
  }
}
