import { Toaster, toast } from "sonner";
import { Button } from "../Button";

export interface ToastProps {
  message: string;
  description: string;
  theme: "light" | "dark";
}

export function Toast({ message, description, theme }: ToastProps) {
  return (
    <>
      <Button variant="secondary" size="md" content="Show Toast" label={"Show Toast"}
      onClick={() => {
        toast(message, { description });
      }}>
      </Button>
      <Toaster theme={theme} />
    </>
  );
}
