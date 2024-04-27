export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <div
      className={`bg-gray-900 px-3 py-3 rounded-sm box-border border-2 border-gray-900 border-solid flex align-baseline
      focus-within:border-ignite300
        has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed 
      `}
    >
      {!!prefix && (
        <span className="font-default text-sm text-gray-400 font-regular">
          {prefix}
        </span>
      )}
      <input
        type="text"
        {...props}
        className="ont-default text-sm disabled:cursor-not-allowed text-white font-regular bg-transparent border-none w-full focus:outline-0 placeholder-gray-400"
      />
    </div>
  );
}
