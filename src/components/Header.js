import SearchInput from "./SearchInput";

export default function Header({ cityFromSearchInput }) {
  return (
    <header className="app-header card-header row align-items-center justify-content-between">
      <h1 className="app-title text-uppercase col-md-5">Weather</h1>
      <SearchInput cityFromSearchInput={cityFromSearchInput} />
    </header>
  );
}