import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import { useEffect, useState } from "react";
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
      <Main data={data} />
    </>
  );
}
