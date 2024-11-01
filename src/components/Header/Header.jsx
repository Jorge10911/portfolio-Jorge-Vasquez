"use client";
import Navbar from "@/components/Header/Navbar/Navbar";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <div className="flex flex-row justify-end gap-4 sm:justify-between px-6 lg:gap-0 md:px-12 pt-6 pb-2">
      <div className="w-12 h-10 sm:hidde" />
      <Navbar />
      <ThemeSwitcher darkClassName={"dark"} />
    </div>
  );
}
