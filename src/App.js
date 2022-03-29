import Home from "./components/main/Home";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainCountry from "./components/main/mainCountry";
export default function App() {
  const [target, setTarget] = useState("/all");
  const [data, setData] = useState([]);
  const [valid, setValid] = useState(true);
  useEffect(() => {
    fetch(`https://restcountries.com/v2${target}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((arr) => {
        // setValid(false);
        console.log(arr);
      });
  });
  // console.log(data[1]);

  return (
    <>
      <Navbar />
      {valid === true ? (
        <BrowserRouter>
          <Routes>
            {data.map((arr, i) => {
              return (
                <Route
                  key={i}
                  path={`/${data.alpha3Code}`}
                  element={<MainCountry data={arr} bigData={data} />}
                />
              );
            })}
            <Route
              path="/"
              element={<Home data={data} func={(value) => setTarget(value)} />}
            />
          </Routes>
        </BrowserRouter>
      ) : null}
    </>
  );
}
