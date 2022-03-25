import { Link } from "react-router-dom";
function MainCountry({ data }) {
  //   console.log(data.name.nativeName);
  const nativeName = Object.keys(data.name.nativeName);
  const lang = Object.keys(nativeName);
  //   console.log(lang);
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
          <div className="details d-flex justify-content-between">
            <ul>
              <li>
                <span>Name:</span>
                {" " + data.name.nativeName.eng.official}
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
          <div className="borders d-flex align-items-center">
            <p>Border Countries: </p>
            {data.borders !== undefined
              ? data.borders.map((country, i) => {
                  return <button key={i}>{country}</button>;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainCountry;
