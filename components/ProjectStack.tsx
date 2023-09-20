import React from 'react';
import Marquee from "react-fast-marquee";

// Define types for the technology map
type TechnologyMap = {
  [key: string]: {
    image: string;
    classes: string;
  };
};

const map: TechnologyMap = {
  expo: {
    image: "https://ik.imagekit.io/kydj5j026nb/hosenurdev/logo-wordmark-light_uKSYrlDUX.png?updatedAt=1695162182991",
    classes: "h-5 w-auto mx-5 "
  },
  tailwind: {
    image: "https://ik.imagekit.io/kydj5j026nb/hosenurdev/tailwindcss-logotype-white_WRt65untC.svg?updatedAt=1695162391706",
    classes: "h-5 w-auto mx-5 "
  },
  turborepo: {
    image: "https://ik.imagekit.io/kydj5j026nb/hosenurdev/turborepo-logotype-dark-background_8zy4JFg5w.png?updatedAt=1695162809596",
    classes: "h-5 w-auto mx-5 "
  },
  nextjs: {
    image: "https://ik.imagekit.io/kydj5j026nb/hosenurdev/nextjs-logotype-dark-background_hUsheWWez.png?updatedAt=1695162967664",
    classes: "h-5 w-auto mx-5 "
  },
  cloudflare: {
    image: "https://ik.imagekit.io/kydj5j026nb/hosenurdev/CF_logo_horizontal_whitetype_SAnJV9hPZ.png?updatedAt=1695162999916",
    classes: "h-5 w-auto mx-5 "
  },
  react: {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    classes: "h-8 w-auto mx-5 "
  },
  node: {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    classes: "h-20 w-auto mx-5 "
  },
  appwrite:{
    image:"https://ik.imagekit.io/kydj5j026nb/hosenurdev/built-with-appwrite_GI9uyFpPe.svg?updatedAt=1695235641136",
    classes : "h-8 w-auto mx-5"
  }
};

// Define the prop type for Stack component
type StackProps = {
  stack: Array<keyof TechnologyMap>; // Use keyof to ensure only valid keys are passed
};

export default function Stack({ stack }: StackProps) {
  return (
    <Marquee
      gradient
      gradientColor={[23, 23, 23]}
      gradientWidth={300}
      autoFill
      speed={30}
    >
      <div className='flex items-center h-20'>

      {stack?.map((tech, i) => (
        <img
        key={i}
        src={map[tech].image}
        className={map[tech].classes}
        />
        ))}
        </  div>
    </Marquee>
  );
}
