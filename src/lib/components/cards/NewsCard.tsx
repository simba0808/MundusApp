"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NewsCard({
  title,
  text,
  imgUrl,
}: {
  title: string;
  text: string;
  imgUrl: string;
}) {
  const router = useRouter();

  return (
    <div className="border-[2px] border-[#CCCCCC] rounded-3xl hover:cursor-pointer">
      <div className="p-4 pb-0">
        <Image
          className="w-full"
          src={imgUrl}
          width={100}
          height={100}
          alt="News"
          unoptimized
          priority
        />
      </div>
      <div className="px-4 py-3">
        <p className="news-title">{title}</p>
        <p className="news-content mt-3">{text}</p>
        <div className="flex justify-end mt-2">
          <span
            className="hover:text-gray-500"
            onClick={() => router.push("/new")}
          >{`READ MORE >`}</span>
        </div>
      </div>
    </div>
  );
}
