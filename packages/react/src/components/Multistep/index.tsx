import { Text } from "../Text";

export interface MultistepProps {
  size: number;
  currentStep: number;
}

export function Multistep({ size, currentStep = 1 }: MultistepProps) {
  return (
    <div>
      <Text
        as={"label"}
        content={`Passo ${currentStep} de ${size}`}
        size="xs"
        className="text-gray-400"
      />
      <div id="steps" className={`mt-1 grid grid-flow-col gap-2`}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`border-1 h-1 bg-gray-600`}
            style={{
              backgroundColor:
                step <= currentStep ? "rgb(229 231 235)" : undefined,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
