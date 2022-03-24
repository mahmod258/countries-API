import Navbar from "../navbar/navbar";
import MainCountry from "../main/mainCountry";
function Countryy({ data }) {
  return (
    <>
      <Navbar />
      <MainCountry data={data} />
    </>
  );
}
export default Countryy;
