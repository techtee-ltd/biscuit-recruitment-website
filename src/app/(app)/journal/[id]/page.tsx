import { urlFor } from "@/sanity/imageUrlBuilder";
import { getJournal } from "@/sanity/sanity.query";
import { Journal } from "@/src/types";
import Image from "next/image";
import styles from "@/src/app/(app)/journal/[id]/journalId.module.scss";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import Tab from "@/src/components/Tab";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Link from "next/link";
import ArrowIcon from "@/src/components/Icons/ArrowIcon";

const JournalIdPage = async ({ params }: { params: { id: string } }) => {
  const { title, subtitle, coverImage, content, _createdAt }: Journal =
    await getJournal(params.id);
  const dateCreated = dayjs(_createdAt).format("DD.MM.YYYY");
  const components = {
    types: {
      image: (props: any) => {
        return (
          <Image
            src={urlFor(props.value).url()}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        );
      },
    },
  };
  return (
    <div className={styles.container}>
      <Row className={`d-grid row-gap-2 `}>
        <Col>
          <Link href="/journal">
            <Stack direction="horizontal" gap={1}>
              <ArrowIcon /> Back
            </Stack>
          </Link>
        </Col>
        <Col xs={12}>
          <Row className="row-gap-5">
            <Col xs={12} lg={3} className="">
              <h1>{title}</h1>
              <h2 className={styles.h2}>{subtitle}</h2>
              <Tab state="readOnly" variant="small">
                {dateCreated}
              </Tab>
            </Col>
            <Col lg={9}>
              <Row>
                <Col xs={12}>
                  <Image
                    src={urlFor(coverImage).url()}
                    alt="image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col xs={12}>
                  <PortableText value={content} components={components} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default JournalIdPage;
