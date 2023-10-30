import { getPrivacyPolicy } from "@/sanity/sanity.query";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import styles from "@/src/app/(app)/privacy-policy/privacy-policy.module.scss";

const PrivacyPolicyPage = async () => {
  const data = await getPrivacyPolicy();
  if (!data?.content) return null;
  const components = {
    block: {
      h1: (props: any) => <h1 className={styles.h1}>{props.children}</h1>,
      h2: (props: any) => <h1 className={styles.h2}>{props.children}</h1>,
      h3: (props: any) => <h3 className={styles.h3}>{props.children}</h3>,
    },
  };
  return (
    <div className={styles.container}>
      <PortableText value={data.content} components={components} />
    </div>
  );
};

export default PrivacyPolicyPage;
