// components/mdx-components/ClientServerTable.jsx
"use client";
import { createContext, useContext } from "react";
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

const TableContext = createContext();

export default function ComparisonTable({ title, children }) {
  return (
    <TableContext.Provider value={{ title }}>
      <div className="overflow-x-auto my-6">
        <Title>{title}</Title>
        <table className="min-w-full text-sm border dark:border-zinc-700 rounded-md overflow-hidden">
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

function Title({ children }) {
  return <h3 className="text-base font-semibold mb-2">{children}</h3>;
}

function Header({ data = [], render }) {
  return (
    <thead className="bg-muted text-left">
      <Row>{data?.map(render)}</Row>
    </thead>
  );
}

function Body({ data=[], render }) {
  if (!data.length) return <p>No data to show at the moment</p>;

  return (
    <tbody className="divide-y dark:divide-zinc-700">{data.map(render)}</tbody>
  );
}

function Row({ children }) {
  return <tr>{children}</tr>;
}

ComparisonTable.Header = Header;
ComparisonTable.Body = Body;
ComparisonTable.Row = Row;


//THE BIRTH PLACE OF THE TABLE ABOVE

// export function Lol() {
//   return (
//     <div className="overflow-x-auto my-6">
//       <h3 className="text-base font-semibold mb-2">
//         🔄 Server vs Client Components
//       </h3>
//       <table className="min-w-full text-sm border dark:border-zinc-700 rounded-md overflow-hidden">
//         <thead className="bg-muted text-left">
//           <tr>
//             <th className="px-4 py-2 border-r dark:border-zinc-700">Feature</th>
//             <th className="px-4 py-2 border-r dark:border-zinc-700">
//               Server Component
//             </th>
//             <th className="px-4 py-2">Client Component</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y dark:divide-zinc-700">
//           {rows.map((row, i) => (
//             <tr key={i}>
//               <td className="px-4 py-2 font-medium">{row.feature}</td>
//               <td className="px-4 py-2">{row.server}</td>
//               <td className="px-4 py-2">{row.client}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
