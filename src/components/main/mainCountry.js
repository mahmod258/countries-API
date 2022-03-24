function MainCountry({ data }) {
  return (
    <div className="main-country">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Arrow Forward</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M268 112l144 144-144 144M392 256H100"
          />
        </svg>
        Back
      </button>
      <div>
        <img src={data.flags.svg} alt="" />
        <div></div>
      </div>
    </div>
  );
}
export default MainCountry;
