"use client";

import styles from "@/src/components/HeaderItems/HeaderItems.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const headerItems = [
  {
    text: "Biscuit",
    href: "/",
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

const HeaderItems = ({
  CloseIcon,
  handleOnClose,
}: {
  CloseIcon?: (props: any) => JSX.Element;
  handleOnClose?: () => void;
}) => {
  const pathname = usePathname();
  const [markerStyle, setMarkerStyle] = useState({
    top: "0px",
    left: "0px",
    width: "0px",
    height: "0px",
  });

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
  };

  const handleLinkClick = (e: any) => {
    handleStyleUpdates(e.target);
  };

  // To set the initial selected item
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    handleStyleUpdates(ref.current);
  }, []);

  return (
    <>
      <div className={styles.headerMarker} style={markerStyle} />
      {headerItems.map((item) => {
        const { text, href } = item;
        const isSelected = pathname === href;
        const isSelectedStyle = isSelected ? styles.headerLinkSelected : "";
        return (
          <Link
            key={text}
            ref={pathname === href ? ref : null}
            onClick={handleLinkClick}
            href={href}
            className={`${styles.headerLink} ${isSelectedStyle}`}
          >
            {text}
            {CloseIcon && isSelected && <CloseIcon onClick={handleOnClose} />}
          </Link>
        );
      })}
    </>
  );
};

export default HeaderItems;
