"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link-header.module.css";

export default function NavLinkHeader({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : `${classes.link}`
      }
    >
      {children}
    </Link>
  );
}
