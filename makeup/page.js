"use client";
import Link from "next/link";
import classes from "./page.module.css";
import { motion } from "framer-motion";
import ImageSlideshow from "../components/makeup/makeups-Slideshow";

export default function MakeupPage() {
  const whatsAppLink = "https://wa.me/9720523262127?text=צור%20קשר%20";

  return (
    <>
      <header className={classes.header}>
        <motion.div
          initial={{ opacity: 0, x: -100 }} // מתחילה מחוץ למסך משמאל
          animate={{ opacity: 1, x: 0 }} // מגיעה למרכז המסך
          transition={{ duration: 1 }} // משך האנימציה הוא 1 שניה
          className={classes.slideshow}
        >
          <ImageSlideshow />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={classes.hero}>
            <h1>
              Profeshonal Makeup created{" "}
              <span className={classes.highlight}>by you</span>
            </h1>
            <p>Contact us for your favorite makeup. It is easy and fun!</p>
          </div>
          <motion.p
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 500 }}
            className={classes.cta}
          >
            <Link href={whatsAppLink} target="_blank" rel="noopener noreferrer">
              Contact Us
            </Link>
          </motion.p>
        </motion.div>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={classes.main}
      >
        <p className={classes.instructions}>
          I specialize in make-up for evening brides or any make-up for such and
          such an event, everything is done in a professional and high-quality
          way, high-quality materials and professional tools, click on contact
          us to schedule your next appointment :)
        </p>
      </motion.main>
    </>
  );
}
