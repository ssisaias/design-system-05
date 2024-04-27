import "../styles/twbuild.css";
import { clsx } from "clsx";
import { Text } from "./Text";

export interface BoxProps {
  content: string;
}

export function Box(props: BoxProps) {
  return (
    <div className="p-4 rounded-md bg-gray-800 border-solid border-[1px] border-gray-600">
      <Text content={props.content}></Text>
    </div>
  );
}
