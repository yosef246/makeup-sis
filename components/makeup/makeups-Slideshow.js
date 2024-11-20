"use client";
import { useEffect, useState } from "react";
import classes from "./makeups-Slideshow.module.css";
import Image from "next/image";

import girl1 from "@/public/images/girl1.webp";
import girl2 from "@/public/images/girl2.webp";
import girl3 from "@/public/images/girl3.webp";
import girl4 from "@/public/images/girl4.webp";
import girl5 from "@/public/images/girl5.webp";

const images = [
  { image: girl1, alt: "A profeshonal makeup" },
  { image: girl2, alt: "A profeshonal makeup" },
  { image: girl3, alt: "A profeshonal makeup" },
  { image: girl4, alt: "A profeshonal makeup" },
  { image: girl5, alt: "A profeshonal makeup" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
