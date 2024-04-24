import "../styles/twbuild.css";
import { clsx } from "clsx";

export interface BoxProps {
  content: string;
}

export function Box(props: BoxProps) {
  return (
    <div className="p-4 rounded-md bg-gray-800 border-solid border-[1px] border-gray-600">
      {props.content}
    </div>
  );
}
