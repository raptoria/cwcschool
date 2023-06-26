"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const links = ["home", "about", "portfolio", "contact"];
const getCurrentLink = (links: Array<string>) => {
  const bottomOfPage =
    document.documentElement.scrollHeight - window.innerHeight ==
    window.pageYOffset;
  let currentLink = null;

  if (bottomOfPage) {
    currentLink = "contact";
  } else {
    links.forEach((link) => {
      const elementTarget = document.getElementById(link);

      if (elementTarget && window.scrollY >= elementTarget?.offsetTop) {
        currentLink = link;
      }
    });
  }
  return currentLink;
};

const Header = () => {
  const [mode, setFixedHeader] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const onClick = (item: string) => {
    setActiveLink(item);
  };

  useEffect(() => {
    const onScroll = (event: any) => {
      const scrollTop = event?.target?.scrollingElement?.scrollTop;
      const currentLink = getCurrentLink(links);

      if (currentLink) {
        setActiveLink(currentLink);
      }

      if (scrollTop >= 20) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Navbar
      fixed={mode}
      activeLink={activeLink}
      onLinkClicked={onClick}
      links={links}
    />
  );
};

export default Header;
