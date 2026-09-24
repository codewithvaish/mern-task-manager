import {
  CheckCircle2,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

const ProgressCard = ({ completed, total }) => {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const remaining = total - completed;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Progress Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track your task completion rate.
          </p>
        </div>

        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
          <span className="text-2xl font-bold text-blue-600">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">
            Completion
          </span>

          <span className="font-semibold text-blue-600">
            {percentage}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 size={18} />

            <span className="text-sm font-medium">
              Completed
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-bold text-slate-800">
            {completed}
          </h3>
        </div>

        <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
          <div className="flex items-center gap-2 text-amber-600">
            <ClipboardList size={18} />

            <span className="text-sm font-medium">
              Remaining
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-bold text-slate-800">
            {remaining}
          </h3>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <TrendingUp
            size={18}
            className="text-blue-600"
          />

          <span>
            <strong>{completed}</strong> of{" "}
            <strong>{total}</strong> tasks completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;