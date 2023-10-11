"use client";

import styles from "@/components/Header/Header.module.scss";
import HeaderItems from "@/components/HeaderItems";
import CloseIcon from "@/components/Icons/CloseIcon";
import HamburgerMenu from "@/components/Icons/HamburgerMenu";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container, Nav } from "react-bootstrap";

const Header = () => {
  const [markerStyle, setMarkerStyle] = useState({
    top: "0px",
    left: "0px",
    width: "0px",
    height: "0px",
  });
  const [selectedNav, setSelectedNav] = useState("");

  const handleStyleUpdates = (target: {
    offsetTop: number;
    offsetLeft: number;
    offsetWidth: number;
    offsetHeight: number;
    id: string;
  }) => {
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight, id } = target;
    setMarkerStyle({
      top: `${offsetTop}px`,
      left: `${offsetLeft}px`,
      width: `${offsetWidth}px`,
      height: `${offsetHeight}px`,
    });
    setSelectedNav(id);
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

  const headerItems = [
    {
      text: "Biscuit",
      href: "/",
      ref,
    },
    {
      text: "Jobs",
      href: "/jobs",
    },
    {
      text: "Our Story",
      href: "/our-story",
    },
    {
      text: "Philosophy",
      href: "/philosophy",
    },
    {
      text: "Journal",
      href: "/journal",
    },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log(selectedNav);

  return (
    <>
      {/* mobile header */}
      <Container className={styles.headerMenuMobile}>
        <Container className="d-flex justify-content-between">
          <Link
            href="/"
            passHref
            className={`${styles.headerLink} ${styles.headerMenuTitle}`}
          >
            Biscuit
          </Link>
          <div
            onClick={() => {
              setDrawerOpen(true);
            }}
            aria-controls="basic-navbar-nav"
            className={styles.headerMenuButton}
          >
            <HamburgerMenu />
          </div>
        </Container>

        <div
          className={`${styles.headerDrawer} ${
            drawerOpen && styles.headerDrawOpen
          }`}
        >
          <HeaderItems
            headerItems={headerItems}
            markerStyle={markerStyle}
            handleLinkClick={handleLinkClick}
            selectedNav={selectedNav}
            CloseIcon={CloseIcon}
            handleOnClose={() => setDrawerOpen(false)}
          />
        </div>
      </Container>

      {/* desktop header */}
      <Nav bsPrefix={styles.headerMenu} className={styles.headerMenuDesktop}>
        <HeaderItems
          headerItems={headerItems}
          markerStyle={markerStyle}
          handleLinkClick={handleLinkClick}
          selectedNav={selectedNav}
        />
      </Nav>
    </>
  );
};

export default Header;
