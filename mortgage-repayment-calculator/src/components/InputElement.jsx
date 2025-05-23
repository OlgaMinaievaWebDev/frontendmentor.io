function InputElement({label, name, id, type="text", icon, iconPosition}) {
 return (
   <div className="flex flex-col w-full gap-2">
   <label htmlFor="amount">{label}</label>

   <div className={`flex items-center border border-slate-500 rounded-md h-10 overflow-hidden`}>
        {icon && iconPosition === 'left' && (
          <div className="text-slate-500 bg-slate-200 h-full px-3 flex items-center justify-center font-bold">
            {icon}
          </div>
        )}

        <input
          type={type}
          name={name}
          id={id}
          className="flex-1 outline-none bg-transparent px-3 h-full"
        />

        {icon && iconPosition === 'right' && (
          <div className="text-slate-500 bg-slate-200 h-full px-3 flex items-center justify-center font-bold">
            {icon}
          </div>
        )}
      </div>
</div>
 );
}

export default InputElement
