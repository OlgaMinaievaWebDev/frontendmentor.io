// InputElement.jsx (or .js)

function InputElement({
  label,
  id,
  name,
  type,
  icon,
  iconPosition,
  error,
  onChange,
  className = "", // accept className prop
  ...rest
}) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label htmlFor={id} className="mb-1 font-medium text-slate-600">
        {label}
      </label>
      <div className="relative">
        {icon && iconPosition === "left" && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
        <input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          {...rest}
          className={`w-full border rounded-md p-2 pl-${
            iconPosition === "left" ? "8" : "3"
          } pr-${
            iconPosition === "right" ? "8" : "3"
          } focus:outline-none focus:ring-2 focus:ring-lime-400 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {icon && iconPosition === "right" && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
      </div>
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
}

export default InputElement;
