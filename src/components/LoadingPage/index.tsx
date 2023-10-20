"use client";

import styles from "@/src/components/LoadingPage/LoadingPage.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LoadingPage = ({ children }: { children: any }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingText}>Loading</div>
      </div>
    );
  }
  return (
    <>
      <div className={styles.loaded}>
        <div className={styles.loadingText}>Loading</div>
      </div>
      <span className={styles.page}>{children}</span>
    </>
  );
};

export default LoadingPage;
