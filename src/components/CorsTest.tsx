"use client";

import { useEffect } from "react";

export default function CorsTest() {
  useEffect(() => {
    // 정상 호출 예시
    fetch("https://httpbin.org/status/300")
      .then((res) => console.log("정상 : ", res))
      .catch((err) => console.error("에러 : ", err));

    // cors 차단 예시
    fetch("https://example.com")
      .then((res) => console.log("응답 : ", res))
      .catch((err) => console.error("cors 에러 : ", err));
  }, []);

  return <>crs cors 발생 테스트</>;
}
