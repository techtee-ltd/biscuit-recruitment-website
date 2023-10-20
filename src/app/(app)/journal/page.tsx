import { urlFor } from "@/sanity/imageUrlBuilder";
import {
  getJournalsForMain,
  getJournalsForSidebar,
} from "@/sanity/sanity.query";
import styles from "@/src/app/(app)/journal/journal.module.scss";
import Tab from "@/src/components/Tab";
import { Journal } from "@/src/types";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { Col, Row, Stack } from "react-bootstrap";

const JournalPage = async () => {
  const main: Journal[] = await getJournalsForMain();
  const sidebar: Journal[] = await getJournalsForSidebar();
  return (
    <div className={styles.container}>
      <Row className="row-gap-5">
        <Col xs={12}>
          <h1 className={styles.h1}>
            The most important news, perspectives, trends, and expert talks from
            our point of view.
            <br />
            Take a minute to enjoy the read!
          </h1>
        </Col>
        <Col md={{ order: 2, span: 9 }} className={styles.main}>
          <Row className="row-gap-5">
            {main.map(({ _id, title, coverImage, content, subtitle }) => {
              return (
                <Col key={_id} md={4}>
                  <Link href={`/journal/${_id}`}>
                    <Image
                      src={urlFor(coverImage).url()}
                      alt="image"
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.description}>
                      {subtitle ? subtitle : <PortableText value={content} />}
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col md={{ order: 1, span: 3 }} className={styles.sidebar}>
          <Stack gap={3}>
            {sidebar.map(({ _id, title, _createdAt }) => {
              const dateCreated = dayjs(_createdAt).format("DD.MM.YYYY");
              return (
                <Link key={_id} href={`/journal/${_id}`}>
                  <Stack gap={1}>
                    <h2 className={styles.title}>{title}</h2>
                    <Tab state="readOnly" variant="small">
                      {dateCreated}
                    </Tab>
                  </Stack>
                </Link>
              );
            })}
          </Stack>
        </Col>
      </Row>
    </div>
  );
};

export default JournalPage;
