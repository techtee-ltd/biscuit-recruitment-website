import Tab from "@/src/components/Tab";
import { Job } from "@/src/types";
import { usePathname } from "next/navigation";
import { Col, Row } from "react-bootstrap";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;

const JobShareTabs = ({ job }: { job: Job }) => {
  if (!job) return null;
  const { title } = job;
  const pathname = usePathname();
  const shareUrl = `${ROOT_URL}${pathname}`;
  const socialMediaUrl: { [key: string]: any } = {
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    Twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`,
    LinkedIn: `https://www.linkedin.com/shareArticle?${shareUrl}=a&title=${title}`,
    Telegram: `https://telegram.me/share/url?url=${shareUrl}&text=${title}`,
  };
  console.log("pathname", pathname);
  return (
    <Row className="gap-2 g-0">
      {Object.keys(socialMediaUrl).map((i) => (
        <Col key={i} xs={"auto"}>
          <Tab as={"a"} target="_blank" href={socialMediaUrl[i]}>
            {i}
          </Tab>
        </Col>
      ))}
    </Row>
  );
};

export default JobShareTabs;
