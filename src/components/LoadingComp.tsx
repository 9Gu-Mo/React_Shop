"use client";

// style
import "@/src/styles/component/loading.scss";

// component
import Lottie from "lottie-react";

// lottie
import aninationData from "@/public/lottie/cosmos.json";

export default function LoadingComp() {
  return (
    <>
      <div className="loading">
        <Lottie animationData={aninationData} />
      </div>
    </>
  );
}
