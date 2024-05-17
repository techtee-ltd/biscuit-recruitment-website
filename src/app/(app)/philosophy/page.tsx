import { urlFor } from "@/sanity/imageUrlBuilder";
import client from "@/sanity/sanity.client";
import styles from "@/src/app/(app)/philosophy/philosophy.module.scss";
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

export const dynamic = "force-dynamic";

async function getData(slug: string): Promise<PageSection> {
  const query = `*[_type == "pages" && Slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

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

const PhilosophyPage = async () => {
  const pageData = await getData("philosophy");
  return (
    <Row className={`row-gap-5 ${styles.container}`}>
      <Row>
        <Col xs={12}>
          <h1 className={styles.h1}>
            {pageData.pageMainTitle ??
              `We truly understand the importance of building relationships with
            clients and candidates alike, allowing us to fully understand hiring
            needs and never compromising on quality.`}
          </h1>
        </Col>
      </Row>
      <PageItems pageData={pageData} />
      {/* <Row>
        <Col>
          <TextImage
            title="Our Philosophy"
            color="#F2D8D8"
            content={[
              "We believe that the art of matching candidate personalities to company cultures is as important as the science of matching skill sets to jobs. We work to get to know you and what makes your business tick at the same time as taking a personal interest in the career aspirations and working style of our candidates.",
              "From private families and entrepreneurs to start-ups and major corporations, our boutique agency is in the business of connecting people – and we never forget it. Humans helping humans. And it shines through in the way our consultants get to know the real you and understand what you’re looking for. That’s what makes us Biscuit.",
              "We are small, and we will always be small; it is the only way to maintain our personal touch. Our consultants aren’t ruled by short-term targets, because we want to build long-term relationships. We have a genuine interest in the industries we work with, and you will be paired with a consultant who has the best knowledge in your area.",
              "We get it.",
            ]}
            imgSrc={"/philosophy-page-1.jpg"}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextImage
            title="Our Clients"
            color="#5C8984"
            content={[
              "We meet with all of our clients and seek to understand their needs, from filling a specific vacant position to consulting on support staff infrastructure for new or expanding businesses.",
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextImage
            title="Candidates"
            color="#545B77"
            content={[
              "Our candidates benefit from our well-established connections and network. Our candidates are also our friends. We wouldn’t be Biscuit without great candidates, which is why we pride ourselves on caring and maintaining great relationships. Your professional fulfilment is what our success looks like.",
              "We look for individuality and talent in our candidates, not just a list of competencies. Being a Biscuit candidate means owning it, backing yourself and making it happen.",
              "Own It. Be it. Become it. Become you. Be the You you want to be. Create your ideal tomorrow today. The stories we tell about ourselves define us. Take control of your story. Redefine your future. The decisions you make today will shape your future tomorrow.",
            ]}
            imgSrc="/philosophy-page-2.jpg"
          />
        </Col>
      </Row>
      <Row>
        <HowWeWork />
      </Row> */}
    </Row>
  );
};

export default PhilosophyPage;
