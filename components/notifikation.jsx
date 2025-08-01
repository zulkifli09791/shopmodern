// components/Notification.jsx
export default function Notification({ show, message }) {
  return (
    <div
      className={`fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-[-100px] opacity-0"
      } z-50 flex items-center gap-2`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </div>
  );
}