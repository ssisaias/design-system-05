import "../styles/twbuild.css";
import { clsx } from "clsx";
import { Text } from "./Text";
import { Children, ElementType } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
  as: ElementType;
  children?: React.ReactNode;
}

export function Box(props: BoxProps) {
  return (
    <>
    {/* className="flex flex-col gap-2" */}
      {props.as && (
        <props.as className="p-4 rounded-md bg-gray-800 border-solid border-[1px] border-gray-600 flex flex-col gap-1">
          {props.content && <Text content={props.content}></Text>}
          {Children.toArray(props.children).map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </props.as>
      )}
    </>
  );
}
