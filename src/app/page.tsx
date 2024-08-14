import Calendar from "@/modules/Calendar";
import Preview from "@/modules/Preview";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Preview />
      <Calendar />
    </>
  );
}
