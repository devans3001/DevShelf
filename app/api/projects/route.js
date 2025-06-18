// /app/api/vercel-projects/route.js (App Router) or /pages/api/vercel-projects.js (Pages Router)
export async function GET(req) {
  const VERCEL_TOKEN = process.env.VERCEL_API_TOKEN;
  const ABSTRACT_API_KEY = process.env.ABSTRACT_SCREENSHOT_KEY;

  const projectsRes = await fetch("https://api.vercel.com/v9/projects", {
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
    },
  });

  const projects = await projectsRes.json();

  // Fetch screenshot for each project
const withScreenshots = await Promise.all(
  projects?.projects?.map(async (project) => {
    const url = `https://${project.name}.vercel.app`;

    const res = await fetch(
      `https://api.microlink.io/?url=${url}&screenshot=true&meta=true`
    );
    const { data } = await res.json();

    const displayName = project.name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      name: project.name,
      title: data.title,
      altTitle:displayName,
      url,
      desc:data.description,
      img: data?.screenshot?.url || "",
    };
  })
);




  // return Response.json(projects);
  return Response.json(withScreenshots);
}
