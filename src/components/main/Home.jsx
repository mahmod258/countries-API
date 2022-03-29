import Country from "./country";
import { useState } from "react";
function Home({ data, valid }) {
  const [target, setTarget] = useState(localStorage.getItem("target"));
  return (
    <main>
      <form
        className="head d-flex justify-content-between"
        onSubmit={(e) => {
          // data.forEach((arr) => {
          //   if (
          //     [
          //       arr.alpha2Code,
          //       arr.alpha3Code,
          //       arr.altSpellings[0],
          //       arr.altSpellings[1],
          //       arr.demonym,
          //       arr.name,
          //     ].includes(e.target[0].value)
          //   ) {
          //     func(true);
          //   } else {
          //     func(false);
          //   }
          // });
          console.log(e);
          console.log(e.target[0].value);
          localStorage.target = e.target[0].value;
          e.preventDefault();
        }}
      >
        <div className="input">
          <input type="text" placeholder="Search Your Country" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Search</title>
            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
          </svg>
        </div>
        <select>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
      {valid === true ? (
        <div className="countries">
          {data.map((arr, i) => (
            <Country data={arr} key={i} />
          ))}
        </div>
      ) : null}
    </main>
  );
}

export default Home;