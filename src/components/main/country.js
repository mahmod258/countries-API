import { Link } from "react-router-dom";
export default function Country({ data }) {
  return (
    <div className=" cards">
      <Link href={`/${data.altSpellings[0]}`}>
        <img className="card-img-top" src={data.flags.svg} />
        <div className="card-body">
          <p>{data.name.common}</p>
          <ul>
            <li>
              <span>Population: </span> {` `}
              {data.population}
            </li>
            <li>
              <span>region: </span> {` `} {data.region}
            </li>
            <li>
              <span>Capital: </span> {` `}
              {data.capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
