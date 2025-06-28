"use client";

import { useVercelProjects } from "@/hooks/useVercel";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import RevealCard from "./Home/RevelCard";

export function ProjectShowcase() {
  // Curated list of project slugs to display (maintain this as your "highlight reel")
  const HIGHLIGHTED_PROJECTS = [
    "lamadev",
    "ugb",
    "wild-oasis",
    "cms-demo",
    "raven-tech-test",
    "cipher-shield",
    "notion-clone-youtube",
  ];

  const { data, isPending, error } = useVercelProjects();

  // Filter to only show highlighted projects
  const activeProjects = data?.filter((project) =>
    HIGHLIGHTED_PROJECTS.includes(project.name)
  ).sort((a,b)=>(a.altTitle - b.altTitle));

  if (isPending) {
    return (
      <section className="bg-background p-6">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-78 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-background py-8">
        <div className="container">
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Project Load Failed</AlertTitle>
            <AlertDescription>
              Couldn't load projects from Vercel. {error.message}
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  if (!activeProjects?.length) {
    return (
      <section className="bg-background py-8">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-2">No Projects Found</h2>
          <p className="text-muted-foreground">
            My highlighted projects will appear here soon.
          </p>
        </div>
      </section>
    );
  }

  // console.log(activeProjects)

  return (
    <section className="bg-background p-6">
      <div className="">
        <header className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Project Showcase</h2>
          <p className="text-muted-foreground mt-2">
            A curated selection of my latest production deployments
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <RevealCard key={project.name} {...project} />
            // <p key={project.name}>{project.name}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
