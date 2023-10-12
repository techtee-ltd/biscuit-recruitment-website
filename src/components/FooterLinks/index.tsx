import ButtonXS from "@/components/ButtonXS";
import { biscuitLinks } from "@/constants";
import { Stack } from "react-bootstrap";

const FooterLinks = ({ showPrivacyPolicy = false }) => {
  const links = { ...biscuitLinks };
  if (!showPrivacyPolicy) {
    links["Privacy Policy"] = "";
  }
  return (
    <Stack gap={1}>
      {Object.keys(links).map((key: string) => {
        const href = links[key];
        if (!href) return;
        return (
          <ButtonXS key={key} href={href}>
            {key}
          </ButtonXS>
        );
      })}
    </Stack>
  );
};

export default FooterLinks;
