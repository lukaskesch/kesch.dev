"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Create a new NavLink component to handle active state
export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "underline"
          : ""
      } transition-colors`}>
      {children}
    </Link>
  );
}
