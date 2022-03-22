export default function Country({ data }) {
  return (
    <div className=" cards">
      <img className="card-img-top" src={data.flags.svg} />
      <div className="card-body">
        <a href="#">Go somewhere</a>
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
    </div>
  );
}
