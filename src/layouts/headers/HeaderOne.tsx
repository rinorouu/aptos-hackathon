"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { WalletSelector } from "@/components/wallet/WalletSelector";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import Logo_white from "@/assets/img/Logo_white.png";

export function HeaderOne() {
  interface DataType {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menu?: {
      id: number;
      title: string;
      link: string;
    }[];
  }

  const menu_data: DataType[] = [
    {
      id: 1,
      title: "Home",
      link: "/",
      has_dropdown: false,
    },

    {
      id: 7,
      title: "Contact",
      link: "/contact",
      has_dropdown: false,
    },
  ];

  const { sticky } = UseSticky();

  const [active, setActive] = useState<Boolean>(false);
  const handleActive = () => {
    setActive(!active);
  };

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(
        ".cs_sticky_header"
      ) as HTMLElement | null;

      if (!header) {
        console.error("Sticky header element not found");
        return;
      }

      const headerHeight = header.offsetHeight + 30;
      const windowTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (windowTop >= headerHeight) {
        header.classList.add("cs_gescout_sticky");
      } else {
        header.classList.remove("cs_gescout_sticky");
        header.classList.remove("cs_gescout_show");
      }

      if (header.classList.contains("cs_gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          header.classList.add("cs_gescout_show");
        } else {
          header.classList.remove("cs_gescout_show");
        }
      }

      setLastScrollTop(windowTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header cs_site_header_full_width ${
          sticky ? "cs_gescout_sticky" : ""
        }`}>
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding logo-dark" href="/"></Link>
                <Link className="cs_site_branding logo-white" href="/">
                  <h4>Aptioon</h4>
                </Link>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_nav cs_medium">
                  <MobileMenu
                    active={active}
                    navTitle={navTitle}
                    openMobileMenu={openMobileMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderOne;
