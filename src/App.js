import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countryy from "./components/country/countryy";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  // console.log(data);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {data.map((arr, i) => {
            return (
              <Route
                key={i}
                path={`/${arr.name.common.split(" ").join("")}`}
                element={<Countryy data={arr} />}
              />
            );
          })}
          <Route path="/" element={<Main data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
