import ButtonMD from "@/components/ButtonMD";
import CTAArrowIcon from "@/components/Icons/CTAArrowIcon";
import styles from "@/components/StickyFooter/StickyFooter.module.scss";
import { biscuitLinks } from "@/constants";
import { Navbar, Stack } from "react-bootstrap";

const StickyFooter = () => {
  const links: any = (({ LinkedIn, Instagram, Email }) => ({
    LinkedIn,
    Instagram,
    Email,
  }))(biscuitLinks); // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
  return (
    <Navbar fixed="bottom" className={styles.footer}>
      <ButtonMD href="/jobs">
        <Stack gap={3} direction="horizontal">
          <CTAArrowIcon />
          Find a job
        </Stack>
      </ButtonMD>
      <Stack gap={5} direction="horizontal" className={styles.footerRight}>
        {Object.keys(links).map((key: string) => {
          const href = links[key];
          return (
            <ButtonMD key={key} href={href}>
              {key}
            </ButtonMD>
          );
        })}
      </Stack>
    </Navbar>
  );
};

export default StickyFooter;
