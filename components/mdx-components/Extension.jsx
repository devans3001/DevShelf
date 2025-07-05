import { vscodeExtensions } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";

export function ExtensionCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {vscodeExtensions.map((ext) => (
        <Extension key={ext.name} {...ext} />
      ))}
    </div>
  )
}

 function Extension({ name, publisher, installs, rating, description, img, url }) {
  return (
    <Link className="border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow" href={url} target="_blank">
      <div className="flex items-start gap-3">
        {img && <Image src={img} alt={`${name} icon`} width={32} height={32} />}
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex gap-4 mt-2 text-xs">
            <span>Publisher: {publisher}</span>
            <span>Installs: {installs}</span>
            <span>Rating: {rating} ⭐</span>
          </div>
        </div>
      </div>
    </Link>
  )
}