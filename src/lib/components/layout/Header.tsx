import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="w-full md:px-8 px-4 py-4">
      <div className="flex items-center justify-between">
        <button className="border p-2 rounded-md md:order-2">
          <Icon icon="bytesize:search" width="24" height="24" />
        </button>
        <Image src="/logo.svg" alt="Logo" width={170} height={80} priority />
        <div className="hidden md:block max-w-[40%] w-full md:order-1">
          <ul className="news-content flex justify-between font-semibold">
            <li>Home</li>
            <li>For you</li>
            <li>Sports</li>
            <li>Famous</li>
            <li>Prizes</li>
            <li>
              <b>...</b>
            </li>
          </ul>
        </div>
        <Image
          className="order-3"
          src="/inbox.svg"
          alt="Inbox"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
}
