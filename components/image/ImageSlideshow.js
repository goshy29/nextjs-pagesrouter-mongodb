import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from "./ImageSlideshow.module.css";

import news1 from "@/assets/images/news1.jpg";
import news2 from "@/assets/images/news2.jpg";
import news3 from "@/assets/images/news3.jpg";

const images = [
    { image: news1, alt: "Some useful information from news1" },
    { image: news2, alt: "Some useful information from news2" },
    { image: news3, alt: "Some useful information from news3" }
  ];

function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
          );
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);

    return ( 
        <div className={classes.slideshow}>
            {images.map((image, index) => (
                <Image
                key={index}
                src={image.image}
                className={index === currentImageIndex ? classes.active : ''}
                alt={image.alt}
                />
            ))}
        </div>
    );
}

export default ImageSlideshow;