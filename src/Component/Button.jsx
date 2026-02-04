function Button({
  message,
  icon,
  bgColor = "blue-500",
  border = "none",
  radius = false,
}) {
  return (
    <button
      className={`flex gap-1.5 bg-${bgColor} border border-${border} px-10 py-3 hover:bg-blue-600 mt-6 font-medium ${radius ? "rounded-4xl" : "rounded-0"}`}
    >
      <span>{icon}</span>
      <span>{message} </span>
    </button>
  );
}

export default Button;
