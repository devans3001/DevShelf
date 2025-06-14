"use client";

import { SheetFooter } from "@/components/ui/sheet";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com", icon: Github, color: "bg-black" },
  { href: "https://linkedin.com", icon: Linkedin, color: "bg-[#0077b5]" },
  { href: "https://twitter.com", icon: Twitter, color: "bg-[#1DA1F2]" },
  { href: "mailto:someone@example.com", icon: Mail, color: "bg-[#EA4335]" },
];

export default function SocialFooter() {
  return (
    <SheetFooter className="relative w-full h-[10%] sm:h-[15%] flex justify-around">
      <div>

      <ul className="flex justify-around">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <li key={index} className="list-none">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-1.5 bg-foreground text-center rounded-full overflow-hidden border-4  z-10 group"
              >
                <span
                  className="relative z-20 flex items-center justify-center h-full transition-transform duration-500 group-hover:rotate-[360deg]"
                >
                  <Icon
                    className="w-6 h-6 stroke-background group-hover:stroke-white transition-colors text-background duration-500"
                  />
                </span>
                <span
                  className={`absolute top-full left-0 w-full h-full ${link.color} z-10 transition-all duration-500 group-hover:top-0`}
                />
              </a>
            </li>
          );
        })}
      </ul>
      </div>

    </SheetFooter>
  );
}
