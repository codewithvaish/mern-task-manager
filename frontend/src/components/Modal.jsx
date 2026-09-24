import { X } from "lucide-react";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div
        className="
          w-full
          max-w-lg
          md:max-w-2xl
          bg-white
          rounded-3xl
          shadow-2xl
          border
          border-slate-200
          overflow-hidden
          max-h-[90vh]
          flex
          flex-col
        "
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-5 pb-6 sm:px-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;