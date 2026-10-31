import Link from "next/link";

export default function RefLink({
  href,
  children,
  className,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={`${href}?ref=ikkihou.vercel.app`}
      rel="noopener"
      target="_blank"
      className={className}
    >
      {children}
    </Link>
  );
}
