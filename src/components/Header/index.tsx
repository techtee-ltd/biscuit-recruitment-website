"use client";

import styles from "@/components/Header/Header.module.scss";
import { useEffect, useRef, useState } from "react";
import { Nav } from "react-bootstrap";

const Header = () => {
  const [markerStyle, setMarkerStyle] = useState({
    left: "0px",
    width: "0px",
    height: "0px",
  });
  const [selectedNav, setSelectedNav] = useState("");

  const handleStyleUpdates = (target: any) => {
    const { offsetLeft, offsetWidth, offsetHeight, text } = target;
    setMarkerStyle({
      left: `${offsetLeft}px`,
      width: `${offsetWidth}px`,
      height: `${offsetHeight}px`,
    });
    setSelectedNav(text);
  };

  const handleLinkClick = (e: any) => {
    handleStyleUpdates(e.target);
  };

  // To set Biscuit as the initial selected value
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    handleStyleUpdates(ref.current);
  }, []);

  const navItems = [
    {
      text: "Biscuit",
      ref,
    },
    {
      text: "Jobs",
    },
    {
      text: "Our Story",
    },
    {
      text: "Philosophy",
    },
    {
      text: "Journal",
    },
    {
      text: "Contact Us",
    },
  ];

  return (
    <Nav className={styles.navMenu}>
      <div className={styles.navMarker} style={markerStyle} />
      {navItems.map((item) => {
        const { text, ref = null } = item;
        const isSelected = selectedNav === text ? styles.navLinkSelected : "";
        return (
          <Nav.Link
            key={text}
            ref={ref}
            onClick={handleLinkClick}
            bsPrefix={`${styles.navLink} ${isSelected}`}
          >
            {text}
          </Nav.Link>
        );
      })}
    </Nav>
  );
};

export default Header;
