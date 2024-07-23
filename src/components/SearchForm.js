export default function SearchForm({ searchTerm, handleSetSearchTerm }) {
  //let searchTerm = "";

  function handleSubmit(event) {
    event.preventDefault();
    //searchTerm = event.target.searchTerm.value;
    handleSetSearchTerm(event.target.searchTerm.value);
    console.log("SearchTerm: ", searchTerm);
  }

  return (
    <div style={{ border: "1px solid green" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(event) => {
            handleSetSearchTerm(event.target.value);
          }}
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </div>
  );
}
