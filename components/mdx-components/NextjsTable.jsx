"use client";
import React from "react";
import ComparisonTable from "./ComparisonTable";
const rows = [
  {
    one: "Default in App Router",
    two: "✅",
    three: "❌ (must use 'use client')",
  },
  {
    one: "Access `useEffect`",
    two: "❌",
    three: "✅",
  },
  {
    one: "Bundled to client",
    two: "❌",
    three: "✅",
  },
  {
    one: "Recommended for",
    two: "Data fetching, performance",
    three: "Interactivity, hooks",
  },
];

function NextjsTable() {
  const head = ["Features", "Server Component", "Client Component"];
  return (
    <ComparisonTable title={"🔄 Server vs Client Components"}>
      <ComparisonTable.Header
        data={head}
        render={(ele, i) => {
          const last = head.length === i;
          if (last)
            return (
              <th key={i} className="px-4 py-2">
                {ele}
              </th>
            );
          return (
            <th key={i} className="px-4 py-2 border-r dark:border-zinc-700">
              {ele}
            </th>
          );
        }}
      />
      <ComparisonTable.Body
        data={rows}
        render={(row, i) => (
          <tr key={i}>
            <td className="px-4 py-2 font-medium">{row.one}</td>
            <td className="px-4 py-2">{row.two}</td>
            <td className="px-4 py-2">{row.three}</td>
          </tr>
        )}
      />
    </ComparisonTable>
  );
}

export default NextjsTable;
