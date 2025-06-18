"use client";

import { useVercelProjects } from "@/hooks/useVercel";
import { Skeleton } from "./ui/skeleton";
import RevealCard from "./Home/RevelCard";

export function ProjectShowcase() {
  const pros = [
    "lamadev",
    "ugb",
    "wild-oasis",
    "cms-current",
    "raven-tech-test",
    "cipher-shield",
    "smart-seo",
    "notion-clone-youtube",
  ];
  const { data, isPending } = useVercelProjects();

  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-lg" />
        ))}
      </div>
    );
  }
  const active = data?.filter((ele) => pros.includes(ele.name));

  console.log(active);

  return (
    <div className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {active?.map((project) => (
         <RevealCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
