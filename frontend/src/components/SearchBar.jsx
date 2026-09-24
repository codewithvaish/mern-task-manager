import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full sm:max-w-md lg:max-w-lg">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search by title or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          py-3
          pl-11
          pr-4
          text-sm
          text-slate-700
          shadow-sm
          transition-all
          duration-200
          placeholder:text-slate-400
          focus:border-blue-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
        "
      />
    </div>
  );
};

export default SearchBar;