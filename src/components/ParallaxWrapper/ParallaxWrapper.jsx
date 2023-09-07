"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";

const ParallaxWrapper = ({ children }) => {
  return (
    <div>
      {" "}
      <ParallaxProvider>{children}</ParallaxProvider>
    </div>
  );
};

export default ParallaxWrapper;
