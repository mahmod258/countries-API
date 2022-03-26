import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainCountry from "./components/main/mainCountry";
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
      <Navbar />
      <BrowserRouter>
        <Routes>
          {data.map((arr, i) => {
            return (
              <Route
                key={i}
                path={`/${arr.cca3}`}
                element={<MainCountry data={arr} bigData={data} />}
              />
            );
          })}
          <Route path="/" element={<Main data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
