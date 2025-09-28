import HomePage from "@/components/Home/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#091f2c]">
        <HomePage />
      </div>
    </>
  );
}
