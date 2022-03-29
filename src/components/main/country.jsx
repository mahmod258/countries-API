import { Link } from "react-router-dom";
export default function Country({ data }) {
  // console.log(data);
  return (
    <div className=" cards">
      <Link to={`/${data.alpha3Code}`}>
        <img className="card-img-top" src={data.flags.svg} />
        <div className="card-body">
          <p>{data.name}</p>
          <ul>
            <li>
              <span>Population: </span>
              {data.population}
            </li>
            <li>
              <span>region: </span> {data.region}
            </li>
            <li>
              <span>Capital: </span>
              {data.capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
