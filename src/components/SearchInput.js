import { useState } from "react";

export default function SearchInput({ cityFromSearchInput }) {

  const [city, setCity] = useState("");

  function changeHandler(event) {
    setCity(event.target.value);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        cityFromSearchInput(city);
        setCity("");
      }}
      id="search-form" className="search-form row align-items-center col-md-7">
      <div className="col-11">
        <input type="search"
          onChange={changeHandler}
          id="search"
          className="search-input form-control form-control-sm rounded-0"
          autoComplete="off"
          autoFocus={true}
          placeholder="Enter a city"
          value={city}
        />
      </div>
      <div className="search-btn_block d-flex">
        <button type="submit" className="btn search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  )
}