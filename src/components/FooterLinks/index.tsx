import ButtonXS from "@/src/components/ButtonXS";
import { biscuitLinks } from "@/src/constants";
import { Stack } from "react-bootstrap";

const FooterLinks = ({
  showPrivacyPolicy = false,
  handleOnClose,
}: {
  showPrivacyPolicy: boolean;
  handleOnClose: () => void;
}) => {
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
          <ButtonXS key={key} href={href} onClick={handleOnClose}>
            {key}
          </ButtonXS>
        );
      })}
    </Stack>
  );
};

export default FooterLinks;
