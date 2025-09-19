"use client";

export default function Header() {
  const darkModeToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header>
      <button onClick={darkModeToggle} type="button">
        다크모드 토글 버튼
      </button>
    </header>
  );
}
