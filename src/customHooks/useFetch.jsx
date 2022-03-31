import { useState, useEffect } from "react";
export default function useFetch(url, target) {
  const [data, setData] = useState([]);
  const [valid, setValid] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`${url}${target}`);
        console.log(response.status);
        if (response.ok) {
          let data = await response.json();
          setData(data);
          console.log(`${url}${target}`);
          console.log(data);
          setValid(true);
          console.log(valid);
        } else {
          console.log("erooooor");
          setValid(false);
          console.log(valid);
        }
      } catch (err) {
        setValid(false);
        setData([]);
        console.log(data);
        console.error(err);
      }
    }
    fetchData();
  }, [target]);
  return { data, valid };
}
