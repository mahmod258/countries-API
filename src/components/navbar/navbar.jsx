import { useState } from "react";
function Navbar() {
  let r = document.querySelector(":root");
  const [trigger, setTrigger] = useState(true);
  function liDrMode() {
    if (trigger) {
      r.style.setProperty("--color", "black");
      r.style.setProperty("--background", "white");
      r.style.setProperty("--background-nav", "white");
    } else if (!trigger) {
      r.style.setProperty("--color", "white");
      r.style.setProperty("--background", "hsl(207, 26%, 17%)");
      r.style.setProperty("--background-nav", "rgb(37, 54, 63)");
    }
    setTrigger(!trigger);
  }
  return (
    <nav className="py-2">
      <div className="navbar d-flex align-items-center justify-content-between">
        <p className="m-0">Where in the world?</p>
        <button onClick={liDrMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Moon</title>
            <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
          </svg>
          <p>Dark Mode</p>
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
