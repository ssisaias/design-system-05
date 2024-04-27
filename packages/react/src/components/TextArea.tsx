import "../styles/twbuild.css";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props: TextAreaProps) {
  return (
    <>
      <textarea
        className={`
        box-border min-h-24 w-96 resize-y rounded-sm border-2 border-solid border-gray-900 bg-gray-900 px-3
        py-4 font-default text-sm font-regular text-white
        placeholder:text-gray-400 focus-within:border-ignite300
        focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-50 
      `}
        placeholder={props.placeholder}
        disabled={props.disabled}
      ></textarea>
    </>
  );
}
