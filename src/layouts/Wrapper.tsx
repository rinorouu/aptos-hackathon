"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import DarkLight from "@/components/common/DarkLight";
import ScrollToTop from "@/components/common/ScrollToTop";
import { scrollSmother } from "@/utils/scrollSmother";

import { ScrollSmoother } from "@/plugins";
gsap.registerPlugin(ScrollSmoother);

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }
  }, []);

  useEffect(() => {
    // buttonAnimation()
    // animationTitle()
    scrollSmother();
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
      <DarkLight />
    </>
  );
};

export default Wrapper;
