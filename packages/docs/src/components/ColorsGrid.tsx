import { colors } from "@isaias-ui/tokens";
import { getContrast } from "polished";
export function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => (
    <div key={key} style={{ backgroundColor: value, padding: "1.2rem" }}>
      <div
        style={{
          backgroundColor: value,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: getContrast(value, "#fff") < 2.5 ? "#000" : "#fff",
        }}
      >
        <strong>${key}</strong>
        <span>{value}</span>
      </div>
    </div>
  ));
}
