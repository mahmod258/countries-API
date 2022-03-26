import { Link } from "react-router-dom";
import { useState } from "react";
function MainCountry({ data, bigData }) {
  const lang = Object.keys(data.languages);
  const FiltredBorders = data.borders.filter((coun) => {
    for (let i = 0; i < bigData.length; i++) {
      if (coun === bigData[i].cca3) {
        return true;
      }
    }
    return false;
  });
  return (
    <div className="main-country">
      <Link to="/">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Arrow Forward</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M268 112l144 144-144 144M392 256H100"
            />
          </svg>
          Back
        </button>
      </Link>
      <div className="">
        <img src={data.flags.svg} alt="" />
        <div>
          <h1>{data.name.common}</h1>
          <div className="details d-flex">
            <ul>
              <li>
                <span>Name:</span>
                {" " + data.altSpellings[2]}
              </li>
              <li>
                <span>Population:</span> {" " + data.population}
              </li>
              <li>
                <span>Region:</span> {" " + data.region}
              </li>
              <li>
                <span>Sub Region:</span> {" " + data.subregion}
              </li>
              <li>
                <span>Capital:</span> {" " + data.capital[0]}
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain:</span>
                {" " + data.tld[0]}
              </li>
              <li>
                <span>Languages:</span>
                {" " + lang[0]}
              </li>
            </ul>
          </div>
          <div className="borders d-flex align-items-center flex-wrap">
            <p>Border Countries: </p>
            {data.borders !== undefined ? (
              data.borders.map((country, i) => {
                return (
                  <Link to={`/${FiltredBorders[i]}`}>
                    <button key={i}>{country}</button>
                  </Link>
                );
              })
            ) : (
              <p>No Countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainCountry;
