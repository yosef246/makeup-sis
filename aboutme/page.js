"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo1 from "@/assets/icons/logo1.jpg";
import logo2 from "@/assets/icons/logo2.jpg";
import logo3 from "@/assets/icons/logo3.png";
import classes from "./page.module.css";

export default function AboutMePage() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={classes.header}
      >
        <h1>
          One shared passion:{" "}
          <span className={classes.highlight}>Professional</span>
        </h1>
        <p>Join my clients and earn professional makeup for a better look!</p>
      </motion.header>
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={classes.main}
      >
        <h2>
          A professional makeup artist specializing in a natural and elegant
          look.
        </h2>

        <ul className={classes.perks}>
          <motion.li
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Image src={logo1} alt="A logo makeup" />
            <p>A makeup artist creates customized looks for every occasion.</p>
          </motion.li>
          <br></br>
          <br></br>
          <motion.li
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Image src={logo2} alt="A crowd of people, cooking" />
            <p>An event makeup artist adds sparkle to every special moment.</p>
          </motion.li>
          <br></br>
          <br></br>
          <motion.li
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Image src={logo3} alt="A crowd of people at a cooking event" />
            <p>Specialist in permanent makeup for a perfect look 24/7.</p>
          </motion.li>
        </ul>
      </motion.main>
    </>
  );
}
