import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full p-10 py-4">
      <div className="flex items-center justify-between">
        <Image src="/logo.svg" alt="Logo" width={170} height={80} priority />
        <div className="hidden lg:block">
          <ul className="flex justify-between gap-[20px]">
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
        <Image src="/inbox.svg" alt="Inbox" width={30} height={30} />
      </div>
    </header>
  );
}
