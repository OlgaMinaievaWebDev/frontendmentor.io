function Fieldset({ legend, name, options }) {
  return (
    <fieldset className="w-full">
      <legend className="mb-2 text-slate-700 font-medium">{legend}</legend>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className="flex items-center border border-slate-500 rounded-md h-10 px-3 gap-2 cursor-pointer "
          >
            <input
              type="radio"
              name={name}
              id={option.id}
              value={option.value}
              className="accent-[#d7da2f]"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default Fieldset;
