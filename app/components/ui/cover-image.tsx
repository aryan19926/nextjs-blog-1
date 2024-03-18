import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={clsx("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
