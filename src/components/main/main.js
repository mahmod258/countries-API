import Navbar from "../navbar/navbar";
import Home from "./Home";
function Main({ data }) {
  return (
    <>
      <Navbar />
      <Home data={data} />
    </>
  );
}
export default Main;
