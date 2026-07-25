function SearchBar({ search, setSearch }) {
  return (
    <div className="relative">

      <input
        type="text"
        placeholder="🔍 Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl px-5 py-3 shadow-sm"
      />

    </div>
  );
}

export default SearchBar;