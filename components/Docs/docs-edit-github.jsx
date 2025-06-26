import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";

export default function EditOnGitHub({ path }) {
  const githubBaseUrl = "https://github.com/devans3001/DevShelf/blob/main/";

  return (
    <div className="mt-5 text-sm text-muted-foreground text-right">
      <Link
        href={`${githubBaseUrl}${path}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <span className="inline-flex gap-1">
          ✏️ Edit this page on GitHub
          <TiLocationArrow className="" />
        </span>
      </Link>
    </div>
  );
}
