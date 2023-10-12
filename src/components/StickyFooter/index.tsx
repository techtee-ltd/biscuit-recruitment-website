import ButtonMD from "@/components/ButtonMD";
import CTAArrowIcon from "@/components/Icons/CTAArrowIcon";
import styles from "@/components/StickyFooter/StickyFooter.module.scss";
import { Col, Container, Navbar, Row, Stack } from "react-bootstrap";

const StickyFooter = () => (
  <Navbar fixed="bottom" className={styles.footer}>
    <ButtonMD href="/jobs">
      <Stack gap={3} direction="horizontal">
        <CTAArrowIcon />
        Find a job
      </Stack>
    </ButtonMD>
    <Stack gap={5} direction="horizontal" className={styles.footerRight}>
      <ButtonMD href="/jobs">Linkedin</ButtonMD>
      <ButtonMD href="/jobs">Instagram</ButtonMD>
      <ButtonMD href="/jobs">Email</ButtonMD>
    </Stack>
  </Navbar>
);

export default StickyFooter;
