import React from "react";
import "@/styles/navbar.scss";
import Image from "next/image";

interface HeaderProps {
  fixed: boolean;
  activeLink: string;
  links: Array<string>;
  onLinkClicked: (item: string) => void;
}

const Navbar: React.FC<HeaderProps> = ({
  fixed,
  links,
  activeLink,
  onLinkClicked,
}) => {
  const headerClass = fixed ? "fixed" : undefined;

  return (
    <header className={headerClass}>
      <div className="title">
        <div className="logo">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={60}
            height={60}
          />
        </div>
        <h1>gui gurl</h1>
        <h4>canvas of the imagination</h4>
      </div>
      <nav>
        <ul>
          {links
            ? links.map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item}`}
                    className={item === activeLink ? "active" : ""}
                    onClick={(e) => onLinkClicked(item)}
                  >
                    {item}
                  </a>
                </li>
              ))
            : null}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
