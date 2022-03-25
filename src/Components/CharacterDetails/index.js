import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
  const params = useParams();
  const { id } = params;
  const [person, setPerson] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const data = await response.json();
      setPerson(data);
      if (person.results) {
      }
    }
    fetchData();
  }, [id]);

  if (person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <p>Hair color: {person.hair_color}</p>
        <p>Eye color: {person.eye_color}</p>
        <p>Gender: {person.gender}</p>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}
