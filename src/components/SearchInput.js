export default function SearchInput() {
  return (
    <form id="search-form" className="search-form row align-items-center col-md-7">
      <div className="col-12">
        <input type="search"
          id="search"
          className="search-input form-control form-control-sm rounded-0"
          autoComplete="off"
          autoFocus={true}
          placeholder="Enter a city"
        />
      </div>
      <div className="search-btn_block d-flex">
        <button type="submit" className="btn search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button id="location-btn" className="btn location-btn">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>
    </form>
  )
}