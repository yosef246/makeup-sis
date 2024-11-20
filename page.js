"use client";
import classes from "./page.module.css";
import { motion } from "framer-motion";
import ImageSlideshow from "./components/images/images-Slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={classes.slideshow}
        >
          <ImageSlideshow />
        </motion.div>
      </header>
      <main>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={classes.section}
        >
          <h2>About The Commpeny</h2>
          <p>
            Professional makeup at affordable prices! Our experienced team of
            makeup artists offers a wide range of services, from makeup for
            special events to personal makeup lessons. We use quality products
            from the world's leading brands, to guarantee you a perfect look
            over time.
          </p>
          <p>Make an appointment today and discover the difference!</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className={classes.section}
        >
          <h2>Why MAKEUP-SIS?</h2>
          <p>
            Our makeup team consists of experienced and skilled professionals,
            who will create a perfect look for you for any occasion. We use
            leading makeup products, which guarantee durability and a natural
            effect. We listen to your needs and design a unique look for you
            that will express your personality. We are updated with the latest
            innovations in the world of makeup and offer the most advanced
            techniques and products.
          </p>
          <p>
            MAKEUP-SIS is a place to discover new methods and connect with other
            makeup design lovers.
          </p>
        </motion.section>
      </main>
    </>
  );
}
