import Home from "./components/main/Home";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainCountry from "./components/main/mainCountry";
export default function App() {
  const [target, setTarget] = useState(localStorage.getItem("target"));
  const [data, setData] = useState([]);
  const [valid, setValid] = useState(true);
  localStorage.setItem("target", "/all");
  useEffect(() => {
    fetch(`https://restcountries.com/v2${localStorage.getItem("target")}`)
      .then((response) => response.json())
      .then((data) => {
        setValid(true);
        setData(data);
      })
      .catch((arr) => {
        setValid(false);
        console.log(arr);
      });
  });
  // console.log(data[10]);
  // console.log(data);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {data.map((arr, i) => {
            return (
              <Route
                key={i}
                path={`/${arr.alpha3Code}`}
                element={<MainCountry data={arr} bigData={data} />}
              />
            );
          })}
          <Route path="/" element={<Home data={data} valid={valid} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
