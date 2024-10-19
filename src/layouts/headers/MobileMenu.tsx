"use client";

import Link from "next/link";
import React, { useState } from "react";
import { WalletSelector } from "@/components/wallet/WalletSelector";

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
    id: 2,
    title: "Contact",
    link: "/",
    has_dropdown: false,
  },

  {
    id: 8,
    title: "",
    link: "/",
    has_dropdown: false,
  },
];

const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {
  return (
    <>
      <ul
        className="cs_nav_list"
        style={{ display: active ? "block" : "none" }}>
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${
              navTitle === menu.title ? "active" : ""
            }`}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </ul>
      <span></span>
      <WalletSelector />
    </>
  );
};

export default MobileMenu;
