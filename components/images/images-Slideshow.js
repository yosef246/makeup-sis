"use client";
import { useEffect, useState } from "react";
import classes from "./images-Slideshow.module.css";
import Image from "next/image";

import makeupWellcomePage from "@/assets/makeupWellcomePage.webp";
import girl1 from "@/assets/girl1.webp";
import girl2 from "@/assets/girl2.webp";
import girl3 from "@/assets/girl3.webp";
import girl4 from "@/assets/girl4.webp";
import girl5 from "@/assets/girl5.webp";
import girl6 from "@/assets/girl6.webp";
import girl7 from "@/assets/girl7.webp";
import girl8 from "@/assets/girl8.webp";

const images = [
  { image: makeupWellcomePage, alt: "A wellcome Page" },
  { image: girl1, alt: "A picture of makeup" },
  { image: girl2, alt: "A picture of makeup" },
  { image: girl3, alt: "A picture of makeup" },
  { image: girl4, alt: "A picture of makeup" },
  { image: girl5, alt: "A picture of makeup" },
  { image: girl6, alt: "A picture of makeup" },
  { image: girl7, alt: "A picture of makeup" },
  { image: girl8, alt: "A picture of makeup" },
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
