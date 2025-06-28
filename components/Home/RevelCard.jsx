"use client";
import { useState, useRef, useEffect } from "react";
import Hammer from "hammerjs";
import Image from "next/image";
import { Link } from "lucide-react";

export default function RevealCard({ title,altTitle, description, img, url, bgGradient="bg-gradient-to-br from-[#28282b] to-[#7E22CE]" }) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const mc = new Hammer(cardRef.current);

    // fire immediately on touch-down
    mc.get("press").set({ time: 1 });   // minimum press time (ms)
    mc.on("press", () => setActive(true));
    mc.on("pressup", () => setActive(false));

    // also keep desktop hover intact
    return () => mc.destroy();
  }, []);
  return (
     <div
      ref={cardRef}
      className={`relative w-[350px] h-[300px] mx-auto bg-primary rounded-[15px] ${
        active ? "shadow-[0_15px_60px_rgba(0,0,0,0.5)]" : ""
      } group overflow-hidden`}
    >
     {/* Content overlay */}
      <div className="absolute inset-0 p-6 z-10 flex flex-col justify-start">
        <div className={`transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <h2 className="text-xl font-semibold text-muted">{altTitle || title}</h2>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <Link size={20} className="mr-1" />
            View Project
          </a>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 w-full h-full transition-all duration-500 rounded-[15px] ${
          active ? "h-[60px]" : "group-hover:h-[60px]"
        } ${bgGradient} z-20`}
      >
        <div className="relative w-full h-full">
          <Image
            src={img} alt={title} fill
            className={`object-cover rounded-[15px] ${
              active ? "rounded-b-[15px]" : "group-hover:rounded-b-[15px]"
            } brightness-[0.75] transition-all duration-500`}
          />
          {/* <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded-[15px] group-hover:rounded-b-[15px] brightness-[0.75] transition-all duration-500"
          /> */}
          {/* <div className="absolute inset-0 bg-white/10 w-1/2 h-full rounded-l-[15px]" /> */}
        </div>
      </div>
    </div>
  );
}

// const RevealCardsGrid = () => {
//   const projects = [
//     {
//       title: "Mountain Adventure",
//       description:
//         "Explore breathtaking mountain landscapes with this adventure app. Features trail maps, weather updates, and safety tips.",
//       image:
//         "https://images.pexels.com/photos/1983772/pexels-photo-1983772.jpeg?auto=compress&cs=tinysrgb&w=600",
//       githubLink: "https://github.com",
//       demoLink: "https://example.com",
//       bgGradient: "bg-gradient-to-br from-[#28282b] to-[#7E22CE]",
//     },
//     {
//       title: "Mountain Adventure",
//       description:
//         "Explore breathtaking mountain landscapes with this adventure app. Features trail maps, weather updates, and safety tips.",
//       image:
//         "https://images.pexels.com/photos/1983772/pexels-photo-1983772.jpeg?auto=compress&cs=tinysrgb&w=600",
//       githubLink: "https://github.com",
//       demoLink: "https://example.com",
//       bgGradient: "bg-gradient-to-br from-[#28282b] to-[#7E22CE]",
//     },
//     {
//       title: "Mountain Adventure",
//       description:
//         "Explore breathtaking mountain landscapes with this adventure app. Features trail maps, weather updates, and safety tips.",
//       image:
//         "https://images.pexels.com/photos/1983772/pexels-photo-1983772.jpeg?auto=compress&cs=tinysrgb&w=600",
//       githubLink: "https://github.com",
//       demoLink: "https://example.com",
//       bgGradient: "bg-gradient-to-br from-[#28282b] to-[#7E22CE]",
//     },
//   ];

//   return (
//     <div className="bg-background">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//         {projects.map((project, index) => (
//           <RevealCard key={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RevealCardsGrid;
