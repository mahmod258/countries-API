import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<Main data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
