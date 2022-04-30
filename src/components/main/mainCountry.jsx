import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function MainCountry({ data, bigData }) {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate(window.location.pathname);
  //   console.log("hello");
  // }, []);
  const lang = Object.keys(data.languages);
  let filtredBorders = [];
  if (data.borders !== undefined) {
    for (let i = 0; i < data.borders.length; i++) {
      bigData.forEach((country) => {
        if (country.cca3 === data.borders[i]) {
          filtredBorders.push(country);
        }
      });
    }
  }
  console.log(filtredBorders);
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
                <span>Capital:</span> {" " + data.capital}
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain:</span>
                {" " + data.tld[0]}
              </li>
              <li>
                <span>Languages:</span>
                {" " + [lang[0]]}
              </li>
            </ul>
          </div>
          <div className="borders d-flex align-items-center flex-wrap">
            <p>Border Countries: </p>
            {data.borders !== undefined ? (
              filtredBorders.map((country, i) => {
                return (
                  <Link to={`/${country.cca3}/`}>
                    <button key={i}>{country.cca3}</button>
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
