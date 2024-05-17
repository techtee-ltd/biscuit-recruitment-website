import { urlFor } from "@/sanity/imageUrlBuilder";
import client from "@/sanity/sanity.client";
import styles from "@/src/app/(app)/our-story/our-story.module.scss";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

interface PageSection {
  _createdAt: string;
  _type: string;
  page: string;
  Slug: {
    current: string;
    _type: string;
  };
  _id: string;
  pageMainTitle: string;
  _updatedAt: string;
  _rev: string;
  pageItems: {
    sectionTitle: string;
    imagePosition: string;
    _type: string;
    _key: string;
    gridContent: {
      image: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      richText2: any[];
      richText1: any[];
    };
  }[];
}

async function getData(slug: string): Promise<PageSection> {
  const query = `*[_type == "pages" && Slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

const PageItems = ({ pageData }: { pageData: PageSection }) => {
  const renderComponents = pageData.pageItems.map((item, index) => {
    const contentColumns = [
      <Col key="richText1" xs={12} lg={4}>
        <PortableText value={item.gridContent.richText1} />
      </Col>,
      <Col key="richText2" xs={12} lg={4}>
        <PortableText value={item.gridContent.richText2} />
      </Col>,
    ];

    const imageColumn = (
      <>
        {item.gridContent.image ? (
          <Col key="image" xs={12} lg={4}>
            <Image
              src={urlFor(item.gridContent.image).url()}
              alt="our story page photo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        ) : null}
      </>
    );

    let columns;
    switch (item.imagePosition) {
      case "left":
        columns = [imageColumn, ...contentColumns];
        break;
      case "middle":
        columns = [contentColumns[0], imageColumn, contentColumns[1]];
        break;
      case "right":
        columns = [...contentColumns, imageColumn];
        break;
      default:
        columns = contentColumns;
    }

    return (
      <div key={index}>
        <Row className="py-3">
          <Col xs={12} lg={4} className="d-flex align-items-center gap-2">
            <div className={styles.circle} />
            <div>{item.sectionTitle}</div>
          </Col>
        </Row>
        <Row className="py-3 py-lg-5">{columns}</Row>
      </div>
    );
  });

  return renderComponents;
};

const OurStoryPage = async () => {
  const pageData = await getData("our-story");
  const recruitPositions = [
    "Executive Assistants",
    "Personal Assistants",
    "Virtual Assistants",
    "Chief of Staff",
    "Office / Operations Managers",
    "Administrators",
    " Team Assistants / Coordinators",
    "Administrators",
    "HR Professionals",
    "Marketing Assistants and PR Coordinators",
    "Front of House Receptionists",
  ];
  console.log(pageData);
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={12}>
          <h1 className={styles.h1}>
            {pageData.pageMainTitle ??
              "Recruiting based on a community of professional recruiters. The place where ideas come from."}
          </h1>
        </Col>
        <PageItems pageData={pageData} />
      </Row>
    </div>
  );
};

export default OurStoryPage;
