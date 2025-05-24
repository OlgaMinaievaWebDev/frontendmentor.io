function InputElement({
  label,
  name,
  id,
  type = "text",
  step,
  icon,
  iconPosition,
  error,
  onChange,
}) {
  const iconColorClass = error
    ? "text-white bg-red-600"
    : "text-slate-500 bg-slate-200";

  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={id}>{label}</label>

      <div
        className={`flex items-center border rounded-md h-10 overflow-hidden
          ${error ? "border-red-600" : "border-slate-500"}`}
      >
        {icon && iconPosition === "left" && (
          <div
            className={`${iconColorClass} h-full px-3 flex items-center justify-center font-bold`}
          >
            {icon}
          </div>
        )}

        <input
          type={type}
          name={name}
          step={step}
          id={id}
          onChange={onChange}
          className="flex-1 outline-none bg-transparent px-3 h-full"
        />

        {icon && iconPosition === "right" && (
          <div
            className={`${iconColorClass} h-full px-3 flex items-center justify-center font-bold`}
          >
            {icon}
          </div>
        )}
      </div>

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default InputElement;
