import {
  FolderOpen,
  Flag,
  CircleCheckBig,
  ArrowUpDown,
} from "lucide-react";

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
  const wrapperStyle =
    "relative w-full sm:w-[220px]";

  const selectStyle =
    "w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-10 text-sm text-slate-700 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {/* Category */}
      <div className={wrapperStyle}>
        <FolderOpen
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />

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
      </div>

      {/* Priority */}
      <div className={wrapperStyle}>
        <Flag
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />

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
      </div>

      {/* Status */}
      <div className={wrapperStyle}>
        <CircleCheckBig
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />

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
      </div>

      {/* Sort */}
      <div className={wrapperStyle}>
        <ArrowUpDown
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />

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
    </div>
  );
};

export default FilterBar;