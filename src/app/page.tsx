import List from "../components/List";
import ProductSlide from "../components/product/ProductSlide";
import SmoothTabs from "../components/SmoothTabs";

export default function Home() {
  const tabs = [
    {
      label: "Home",
      content: <div>홈 콘텐츠</div>,
    },
    {
      label: "Profile",
      content: <div>vercel 배포 브랜치 변경 테스트</div>,
    },
    {
      label: "Settings",
      content: <div>설정 콘텐츠</div>,
    },
  ];

  return (
    <>
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <ProductSlide />
      </div>
      <div>
        <SmoothTabs tabs={tabs} />
      </div>
      <div className="px-2 sm:px-8">
        <List />
      </div>
    </>
  );
}
