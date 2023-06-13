"use client";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Curosr() {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={40}
      color="255, 255, 255"
      outerAlpha={0.2}
      innerScale={0.6}
      outerScale={2}
      trailingSpeed={7}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
    />
  );
}
