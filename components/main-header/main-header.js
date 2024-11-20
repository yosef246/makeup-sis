import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logoBeauty.webp";
import NavLinkHeader from "./nav-link-header";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo of makeup" priority />
          MAKEUP SIS
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinkHeader href="/makeup">Makeup</NavLinkHeader>
            </li>
            <li>
              <NavLinkHeader href="/aboutme">About Me</NavLinkHeader>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
