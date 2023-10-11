import Link from "next/link";
import styles from "@/components/HeaderItems/HeaderItems.module.scss";

const HeaderItems = ({
  headerItems,
  markerStyle,
  handleLinkClick,
  selectedNav,
  CloseIcon = null,
  handleOnClose = null,
}) => {
  return (
    <>
      <div className={styles.headerMarker} style={markerStyle} />
      {headerItems.map((item) => {
        const { text, href, ref = null } = item;
        const isSelected = selectedNav === text;
        const isSelectedStyle = isSelected ? styles.headerLinkSelected : "";
        return (
          <Link
            key={text}
            ref={ref}
            onClick={handleLinkClick}
            href={href}
            className={`${styles.headerLink} ${isSelectedStyle}`}
            id={text}
          >
            {text}
            {CloseIcon && <CloseIcon onClick={handleOnClose} />}
          </Link>
        );
      })}
    </>
  );
};

export default HeaderItems;
