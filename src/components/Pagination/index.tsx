/* eslint-disable react/jsx-no-bind */

"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import Tab from "../Tab";
import styles from "@/src/components/Pagination/Pagination.module.scss";

export default function Pagination({
  pageIndex,
  isFirstPage,
  isLastPage,
  setPage,
}: {
  pageIndex: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const router = useRouter();

  // Define functions for navigating to the next and previous pages
  // These functions update the page query parameter in the URL
  const handleNextPage = () => {
    setPage(pageIndex + 1);
  };

  const handlePrevPage = () => {
    setPage(pageIndex - 1);
  };

  return (
    <nav aria-label="Pagination" className={styles.pagination}>
      <Tab type="button" disabled={isFirstPage} onClick={handlePrevPage}>
        <span>Previous</span>
      </Tab>
      <Tab type="button" onClick={handleNextPage} disabled={isLastPage}>
        <span>Next</span>
      </Tab>
    </nav>
  );
}
