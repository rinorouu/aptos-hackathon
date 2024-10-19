import React from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "@/assets/img/footer_logo.svg";
import { CopyRight } from "@/components/common/SocialLinks";

interface DataType {
  email: string;
  phone: string;
  location: string;
  footer_info: string;
  links: {
    title: string;
    link: string;
  }[];
}

const footer_data: DataType = {
  email: `info@email.com`,
  phone: `(406) 555-0120`,
  location: `46 JOHN ST TORONTO ON M5V 3W2`,
  footer_info: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development.`,
  links: [],
};
const {} = footer_data;

const FooterOne = () => {
  return (
    <>
      <footer className="cs_footer cs_primary_bg">
        <div className="cs_copyright text-center">
          <div className="container">
            {" "}
            <CopyRight />{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
