import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterList() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        setData(data.results);
      });
  }, []);

  if (data && data.length > 0) {
    return data.map((item) => {
      const id = item.url.slice(29);
      return (
        <>
          <Link to={`/character/${id}`}>{item.name}</Link>
          <p>Gender: {item.gender}</p>
          <p>Home planet: {item.homeworld}</p>
        </>
      );
    });
  } else {
    return <p>Loading...</p>;
  }
}
