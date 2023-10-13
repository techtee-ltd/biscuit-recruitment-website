"use client";

import StickyFooter from "@/components/StickyFooter";

const Home = () => {
  return (
    <>
      <div
        style={{
          height: "calc(100vh - 100px)",
          backgroundColor: "#00B9AA",
        }}
      >
        hello
      </div>
      <div
        style={{
          height: "100px",
          width: "100%",
        }}
      />
      <StickyFooter />
    </>
  );
};

export default Home;