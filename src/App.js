import Home from "./components/main/Home";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainCountry from "./components/main/mainCountry";
import useFetch from "./customHooks/useFetch";
import React from "react";

export default function App() {
  const [target, setTarget] = useState(`/all`);
  let { data, valid } = useFetch(`https://restcountries.com/v3.1`, target);
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
          <Route
            path="/"
            element={
              <Home
                data={data}
                valid={valid}
                setTarget={(value) => setTarget(value)}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
