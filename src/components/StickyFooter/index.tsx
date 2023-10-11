import ButtonMD from "@/components/ButtonMD";
import CTAArrowIcon from "@/components/Icons/CTAArrowIcon";
import styles from "@/components/StickyFooter/StickyFooter.module.scss";
import { Navbar } from "react-bootstrap";

const StickyFooter = () => (
  <Navbar fixed="bottom" className={styles.footer}>
    <ButtonMD href="/jobs">
      <CTAArrowIcon />
      Find a job
    </ButtonMD>
    <div className={styles.footerRight}>
      <ButtonMD href="/jobs">Linkedin</ButtonMD>
      <ButtonMD href="/jobs">Instagram</ButtonMD>
      <ButtonMD href="/jobs">Email</ButtonMD>
    </div>
  </Navbar>
);

export default StickyFooter;
