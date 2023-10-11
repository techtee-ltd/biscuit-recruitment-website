"use client";

import styles from "@/components/Header/Header.module.scss";
import HeaderItems from "@/components/HeaderItems";
import CloseIcon from "@/components/Icons/CloseIcon";
import HamburgerMenu from "@/components/Icons/HamburgerMenu";
import { useState } from "react";
import { Container, Nav } from "react-bootstrap";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* mobile header */}
      <Container className={styles.headerMenuMobile}>
        <Container className="d-flex justify-content-between align-items-center">
          <p className={`${styles.headerLink} ${styles.headerMenuTitle}`}>
            Biscuit
          </p>
          <div
            onClick={toggleMenu}
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
          <HeaderItems CloseIcon={CloseIcon} handleOnClose={toggleMenu} />
        </div>
      </Container>

      {/* desktop header */}
      <Nav bsPrefix={styles.headerMenuDesktop}>
        <HeaderItems />
      </Nav>
    </>
  );
};

export default Header;
