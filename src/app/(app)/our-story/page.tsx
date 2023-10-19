import styles from "@/src/app/(app)/our-story/our-story.module.scss";
import { Col, Row } from "@/src/components/ReactBootstrapClientComponents";
import Image from "next/image";

const OurStoryPage = () => {
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
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={12}>
          <h1 className={styles.h1}>
            Recruiting based on a community of professional recruiters. The
            place where ideas come from.
          </h1>
          <Row className="pt-3 pb-2 pt-lg-5 pb-lg-4">
            <Col className="d-flex align-items-center gap-2">
              <div className={styles.circle} />
              <div>Our Story</div>
            </Col>
          </Row>
        </Col>
        <Col md={6} lg={8}>
          <Row>
            <Col xs={12} lg={6}>
              <p>
                Founded by Frances Li, the idea for Biscuit is one borne of
                innovation and an appetite to help companies recruit the best
                support staff possible.
              </p>
              <p>
                Frances has over 15 years of recruitment experience in the
                industry working with clients that include small start-ups to
                some of the world's major corporations and brands.
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <p>
                The Biscuit team exhibit a moral and ethical responsibility to
                both our clients and candidates; by meeting these needs, we
                create meaningful opportunities for employees and long-term
                value for businesses.
              </p>
              <p>
                Ultimately, we want to conduct first-class business in a
                first-class way.
              </p>
            </Col>
          </Row>
          <Row className={styles.positionsContainer}>
            <p>We recruit for:</p>
            <ul>
              <Row>
                <Col xs={12} lg={6}>
                  {recruitPositions
                    .slice(0, recruitPositions.length / 2)
                    .map((i) => (
                      <li style={{ listStylePosition: "inside" }}>{i}</li>
                    ))}
                </Col>
                <Col xs={12} lg={6}>
                  {recruitPositions
                    .slice(
                      recruitPositions.length / 2,
                      recruitPositions.length - 1
                    )
                    .map((i) => (
                      <li style={{ listStylePosition: "inside" }}>{i}</li>
                    ))}
                </Col>
              </Row>
            </ul>
          </Row>
        </Col>
        <Col md={6} lg={4}>
          <div className={styles.imageContainer}>
            <Image
              src="/our-story-photo.jpg"
              alt="our story page photo"
              fill={true}
              objectFit="contain"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurStoryPage;
