"use client";

import ButtonXS from "@/components/ButtonXS";
import { Stack } from "react-bootstrap";

const data = [
  { text: "Twitter", href: "https://twitter.com/biscuitLdn" },
  { text: "Facebook", href: " https://www.facebook.com/biscuitrecruitment" },
  { text: "Instagram", href: "https://www.instagram.com/biscuitrecruitment" },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/company/biscuit-recruitment",
  },
  { text: "Email", href: "mailtto:info@biscuitrecruitment.com" },
];

const FooterLinks = () => {
  return (
    <Stack gap={2}>
      {data.map(({ text, href }) => (
        <ButtonXS href={href}>{text}</ButtonXS>
      ))}
    </Stack>
  );
};

export default FooterLinks;
