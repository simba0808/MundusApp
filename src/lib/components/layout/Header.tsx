"use client";
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Header({
  headerTrailing,
  hasSearch,
}: {
  headerTrailing?: React.ReactNode;
  hasSearch?: boolean;
}) {
  const router = useRouter();

  const onLogo = useCallback(() => {
    router.push("/");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <Image
        src={"/logo.svg"}
        width={170}
        height={80}
        onClick={onLogo}
        alt="LOGO"
        priority
      />
    );
  }, [onLogo]);

  return (
    <header className="w-full md:px-12 px-4 py-4">
      <div className="flex items-center justify-between">
        {hasSearch && (
          <button className="md:hidden border p-2 rounded-md">
            <Icon icon="bytesize:search" width="24" height="24" />
          </button>
        )}
        {logoElement}
        {headerTrailing}
        <div className="md:w-[150px] lg:w-[400px] 2xl:w-[450px] flex justify-end md:justify-between  order-3">
          <button className="hidden md:block border p-2 rounded-md translate-x-[50%]">
            <Icon icon="bytesize:search" width="24" height="24" />
          </button>
          <Image
            className=""
            src="/inbox.svg"
            alt="Inbox"
            width={30}
            height={30}
          />
        </div>
      </div>
    </header>
  );
}
