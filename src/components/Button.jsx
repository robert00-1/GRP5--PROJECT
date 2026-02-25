export default function Button({ children, onClick, color = "blue", type = "button" }) {
  const colors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded transition ${colors[color]} text-white`}
    >
      {children}
    </button>
  );
}