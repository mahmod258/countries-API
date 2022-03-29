import Home from "./components/main/Home";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainCountry from "./components/main/mainCountry";
export default function App() {
  const [target, setTarget] = useState(`/all`);
  const [valid, setValid] = useState(true);
  const [data, setData] = useState([]);
  const [content, setContent] = useState(
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
  );
  // const [valid, setValid] = useState(true);
  // localStorage.setItem("target", "/all");
  useEffect(() => {
    fetch(`https://restcountries.com/v2${target}`)
      .then((response) => response.json())
      .then((data) => {
        // setValid(true);
        setData(data);
        setTimeout(() => {
          setValid(true);
        }, 0);
        setContent(
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
              <Route
                path="/"
                element={
                  <Home
                    data={data}
                    valid={valid}
                    target={(value) => setTarget(value)}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        );
      })
      .catch((err) => {
        setTimeout(() => {
          setValid(false);
        }, 0);
        console.log(err);
        console.log(`error`);
        setContent(null);
      });
  });
  // console.log(data[10]);
  // console.log(data);
  return (
    <>
      <Navbar />
      {content}
    </>
  );
}
