import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const FIELDS = "translations,capital,population,flags,continents,cca3";

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all?fields=${FIELDS}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) =>
            selectedRadio ? country.continents[0].includes(selectedRadio) : true
          )
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country) => (
            <Card
              key={country.cca3 /* code ISO-3 unique */}
              country={country}
            />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
