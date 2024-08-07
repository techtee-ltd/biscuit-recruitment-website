"use client";

import ButtonMD from "@/src/components/ButtonMD";
import CTAArrowIcon from "@/src/components/Icons/CTAArrowIcon";
import styles from "@/src/components/StickyFooter/StickyFooter.module.scss";
import { biscuitLinks } from "@/src/constants";
import { usePathname } from "next/navigation";
import { Navbar, Stack } from "react-bootstrap";

const excludedPathsFromGlobalPattern = [/\/jobs\/.+/];

const StickyFooter = ({
  Button,
  isGlobalScope = false,
}: {
  Button?: () => JSX.Element;
  isGlobalScope?: boolean;
}) => {
  const pathname = usePathname();
  const links: any = (({ LinkedIn, Instagram, Email }) => ({
    LinkedIn,
    Instagram,
    Email,
  }))(biscuitLinks); // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties

  if (
    isGlobalScope &&
    excludedPathsFromGlobalPattern.some((pattern) => pattern.test(pathname))
  ) {
    return null;
  }

  return (
    <Navbar fixed="bottom" className={styles.navbarContainer}>
      <div className={styles.footer}>
        {Button ? (
          <Button />
        ) : (
          <ButtonMD href="/jobs">
            <Stack gap={3} direction="horizontal">
              <CTAArrowIcon />
              Find a job
            </Stack>
          </ButtonMD>
        )}
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
      </div>
    </Navbar>
  );
};

export default StickyFooter;
