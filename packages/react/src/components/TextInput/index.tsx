export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <div
      className={`box-border flex rounded-sm border-2 border-solid border-gray-900 bg-gray-900 px-3 py-3 align-baseline
      focus-within:border-ignite300
        has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50 
      `}
    >
      {!!prefix && (
        <span className="font-default text-sm font-regular text-gray-400">
          {prefix}
        </span>
      )}
      <input
        type="text"
        {...props}
        className="ont-default w-full border-none bg-transparent text-sm font-regular text-white placeholder-gray-400 focus:outline-0 disabled:cursor-not-allowed"
      />
    </div>
  );
}
