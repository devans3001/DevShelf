

"use client"

import Image from "next/image"
// import lol from "../../public/deepseek_mermaid_20250705_1b45d2.png"

export function ImageComp({ src, alt, width = 800, height = 400, caption }) {
  return (
    <figure className="my-6">
      <div className="relative w-full h-auto overflow-hidden rounded-lg border">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
