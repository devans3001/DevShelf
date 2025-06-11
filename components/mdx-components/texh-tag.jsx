const techItems = [
  {
    name: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: "blue",
  },
  {
    name: "CSS",
    href: "https://css-tricks.com/",
    color: "purple",
  },
  {
    name: "JavaScript",
    href: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    color: "yellow",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/docs/",
    color: "cyan",
  },
  {
    name: "React",
    href: "https://react.dev/learn",
    color: "sky",
  },
  {
    name: "VS Code",
    href: "https://code.visualstudio.com/docs",
    color: "gray",
  },
];

function Tag({ name, href, color }) {
  const baseClasses =
    "inline-flex items-center rounded-md px-4 py-2 text-xs font-medium ring-1 ring-inset";
  const colorClasses = {
    blue: "bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-200",
    purple:
      "bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-900/30 dark:text-purple-200",
    yellow:
      "bg-yellow-50 text-yellow-700 ring-yellow-700/10 dark:bg-yellow-900/30 dark:text-yellow-200",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-700/10 dark:bg-cyan-900/30 dark:text-cyan-200",
    sky: "bg-sky-50 text-sky-700 ring-sky-700/10 dark:bg-sky-900/30 dark:text-sky-200",
    gray: "bg-gray-50 text-gray-700 ring-gray-700/10 dark:bg-gray-900/30 dark:text-gray-200",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${colorClasses[color]}`}
    >
      {name}
    </a>
  );
}

export default function TechTag() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {techItems.map((item) => (
        <Tag key={item.name} {...item} />
      ))}
    </div>
  );
}
