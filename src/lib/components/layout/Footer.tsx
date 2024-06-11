"use client";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  const onLogo = useCallback(() => {
    router.push("/");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <Image
        src={"/logo_footer.svg"}
        width={170}
        height={40}
        onClick={onLogo}
        alt="LOGO"
      />
    );
  }, [onLogo]);
  return (
    <footer className="bg-[#273A8C]">
      <div className="main-container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {logoElement}
          <p className="small-content">
            Mundus News | All Rights Reserved © Copyright 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
