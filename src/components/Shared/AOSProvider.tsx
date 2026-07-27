// components/AOSProvider.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      
      once: false,
    });
  }, []);

  return null;
};

export default AOSProvider;