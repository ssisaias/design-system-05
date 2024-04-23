import "../styles/tokens-grid.css";

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemVal?: boolean;
}

export function TokensGrid({ tokens, hasRemVal = false }: TokensGridProps) {
  return (
    <table style={{ width: "100%", tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemVal && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            {hasRemVal && <td>{Number(value.replace("rem", ""))*16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
