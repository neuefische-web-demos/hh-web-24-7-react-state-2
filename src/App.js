import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSetSearchTerm(term) {
    setSearchTerm(term);
  }

  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} handleSetSearchTerm={handleSetSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
