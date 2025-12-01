"use client";

import { useEffect, useState } from "react";

interface DeviceInfo {
  isMo: boolean;
  isTa: boolean;
  isDe: boolean;
  isAos: boolean;
  isIos: boolean;
}

export function useDeviceDetect() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMo: false,
    isTa: false,
    isDe: true,
    isAos: false,
    isIos: false,
  });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const width = window.innerWidth;

    // User Agent 기반 모바일/태블릿 감지
    const isMoUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTaUA = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
    const isIos = /iphone|ipad|ipod/.test(userAgent);
    const isAos = /android/.test(userAgent);

    // 화면 크기 기반 감지
    const isMoWidth = width < 768;
    const isTaWidth = width >= 768 && width < 1024;

    setDeviceInfo({
      isMo: isMoUA || isMoWidth,
      isTa: isTaUA || isTaWidth,
      isDe: !isMoUA && !isTaUA && width >= 1024,
      isIos,
      isAos,
    });

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setDeviceInfo((prev) => ({
        ...prev,
        isMo: prev.isIos || prev.isAos || newWidth < 768,
        isTa: isTaUA || (newWidth >= 768 && newWidth < 1024),
        isDe: !isMoUA && !isTaUA && newWidth >= 1024,
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceInfo;
}
