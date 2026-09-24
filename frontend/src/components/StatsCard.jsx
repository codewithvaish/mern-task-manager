import {
  ListTodo,
  CircleCheckBig,
  Clock3,
  LoaderCircle,
} from "lucide-react";

const StatsCard = ({
  title,
  value,
  color,
  featured = false,
}) => {
  const icons = {
    "Total Tasks": <ListTodo size={22} />,
    Completed: <CircleCheckBig size={22} />,
    Pending: <Clock3 size={22} />,
    "In Progress": (
      <LoaderCircle
        size={22}
        className="animate-spin"
      />
    ),
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? "border border-green-200 bg-gradient-to-br from-green-50 via-white to-green-50 shadow-md"
          : "border border-slate-200 bg-white shadow-sm"
      }`}
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2
            className={`mt-2 font-bold ${
              featured
                ? "text-4xl sm:text-5xl"
                : "text-3xl sm:text-4xl"
            } ${color}`}
          >
            {value}
          </h2>

          {featured && (
            <p className="mt-2 text-sm font-medium text-green-700">
              Great progress! Keep it up.
            </p>
          )}
        </div>

        <div
          className={`flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${
            featured
              ? "h-14 w-14 bg-green-100"
              : `h-12 w-12 ${color.replace(
                  "text",
                  "bg"
                )}/10`
          } ${color}`}
        >
          {icons[title]}
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full ${
          featured
            ? "bg-green-500"
            : color.replace("text", "bg")
        }`}
      />
    </div>
  );
};

export default StatsCard;