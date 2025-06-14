import { cn } from "@/lib/utils";
import { AlertTriangle, ArrowRight, Info, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function CardGrid({ children, className }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}
<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>;

export function Callout({ children, type = "info", title }) {
  const Icon = {
    info: Info,
    warning: AlertTriangle,
    tip: Lightbulb,
  }[type];

  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-md border-l-4 p-4",
        type === "info" &&
          "border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/20",
        type === "warning" &&
          "border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-900/20",
        type === "tip" &&
          "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20"
      )}
    >
      <Icon
        className={cn(
          "mr-3 h-5 w-5 mt-0.5 flex-shrink-0",
          type === "info" && "text-blue-600 dark:text-blue-400",
          type === "warning" && "text-yellow-600 dark:text-yellow-400",
          type === "tip" && "text-green-600 dark:text-green-400"
        )}
      />
      <div
        className={cn(
          "prose-p:my-0 prose-a:font-medium prose-a:text-inherit prose-a:underline",
          type == "info" && "text-blue-800 dark:text-blue-100",
          type == "warning" && "text-yellow-800 dark:text-yellow-100",
          type == "tip" && "text-green-800 dark:text-green-100"
        )}
      >
        {title && <h2 className="font-bold text-foreground">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export function Card({ href, title, children, icon }) {
  return (
    <Link
      href={href}
      className={cn(
        "group rounded-lg border p-6 transition-colors",
        "hover:border-primary hover:bg-primary/5",
        "focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
    >
      <div className="flex items-center gap-3 mb-2">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-lg font-semibold group-hover:text-primary">
          {title}
          <ArrowRight className="inline ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">{children}</p>
    </Link>
  );
}
