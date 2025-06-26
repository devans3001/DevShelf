"use client";
import React from "react";
import ComparisonTable from "./ComparisonTable";
const rows = [
  {
    one: "Bundle Size",
    two: "~1.5KB",
    three: "~5KB (RTK)",
  },
  {
    one: "Boilerplate",
    two: "Minimal",
    three: "Minimal w/ RTK",
  },
  {
    one: "Async Support",
    two: "Custom (fetch, etc)",
    three: "Built-in (thunks)",
  },
  {
    one: "Learning Curve",
    two: "Easy",
    three: "Steeper",
  },
  {
    one: "Scale",
    two: "Small-to-medium",
    three: "Enterprise-ready",
  },

];

function ReduxTable() {
  const head = ["Features", "Zustand", "Redux Toolkit"];
  return (
    <ComparisonTable title={"🧠 Redux vs Zustand?"}>
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

export default ReduxTable;
