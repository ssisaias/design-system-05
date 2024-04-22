//import './styles/globals.css'
import "./styles/twbuild.css";

export interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return (
    <button className="bg-ignite700 rounded-md p-4 border-0 text-white font-bold">
      {props.title}
    </button>
  );
}
