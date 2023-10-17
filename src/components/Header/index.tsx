"use client";

import FooterLinks from "@/src/components/FooterLinks";
import styles from "@/src/components/Header/Header.module.scss";
import HeaderItems from "@/src/components/HeaderItems";
import CloseIcon from "@/src/components/Icons/CloseIcon";
import HamburgerMenu from "@/src/components/Icons/HamburgerMenu";
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
      <Container fluid className={styles.headerMenuMobile}>
        <div className="d-flex justify-content-between align-items-center">
          <span className={`${styles.headerLink} ${styles.headerMenuTitle}`}>
            Biscuit
          </span>
          <div
            onClick={toggleMenu}
            aria-controls="basic-navbar-nav"
            className={styles.headerMenuButton}
          >
            <HamburgerMenu />
          </div>
        </div>

        <div
          className={`${styles.headerDrawer} ${
            drawerOpen && styles.headerDrawOpen
          }`}
        >
          <div className={styles.headerDrawerWrapper}>
            <div>
              <HeaderItems CloseIcon={CloseIcon} handleOnClose={toggleMenu} />
            </div>
            <Container fluid style={{ padding: "16px 24px" }}>
              <FooterLinks showPrivacyPolicy={true} />
            </Container>
          </div>
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
