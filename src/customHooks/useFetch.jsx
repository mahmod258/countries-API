import { useState, useEffect } from "react";
export default function useFetch(url, target) {
  const [data, setData] = useState([]);
  // const [content, setContent] = useState(structure);
  useEffect(() => {
    async function fetchData() {
      try {
        setTimeout(() => {
          setData(data);
        }, 100);
        let response = await fetch(`${url}${target}`);
        let data = await response.json();
        console.log(`https://restcountries.com/v2${target}`);
      } catch (err) {
        setData(data);
        console.error(err);
      }
    }

    fetchData();
  }, [target]);
  return { data };
}
