import { useQuery } from "@tanstack/react-query";

export function useVercelProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["vercel-projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects");
      return res.json();
    },
  });

  return {
    data,
    isPending,
  };
}
