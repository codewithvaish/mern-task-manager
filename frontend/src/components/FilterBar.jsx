const FilterBar = ({
  category,
  setCategory,
  priority,
  setPriority,
  status,
  setStatus,
  sort,
  setSort,
}) => {
  const selectStyle =
    "w-full sm:w-auto min-w-[170px] px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

  return (
    <div className="flex flex-wrap gap-3">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={selectStyle}
      >
        <option value="">All Categories</option>
        <option>Study</option>
        <option>Career</option>
        <option>Work</option>
        <option>Health</option>
        <option>Shopping</option>
        <option>Finance</option>
        <option>Personal</option>
        <option>Other</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={selectStyle}
      >
        <option value="">All Priorities</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={selectStyle}
      >
        <option value="">All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className={selectStyle}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="dueDate">Due Date</option>
      </select>

    </div>
  );
};

export default FilterBar;