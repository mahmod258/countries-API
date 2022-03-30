import { useState, useEffect } from "react";
export default function useFetch(url, target) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  // const [content, setContent] = useState(structure);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`${url}${target}`);
        let data = await response.json();
        setData(data);
      } catch (err) {
        setData(data);
        console.error(err);
      }
    }

    fetchData();
  }, [target]);
  return { data };
}
