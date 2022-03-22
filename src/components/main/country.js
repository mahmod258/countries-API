export default function Country({ data }) {
  return (
    <div className="card cards">
      <img className="card-img-top" src={data.flags.svg} alt="Card image cap" />
      <div className="card-body">
        <a href="#">Go somewhere</a>
        <ul>
          <li>Population: {data.population}</li>
          <li>data</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
