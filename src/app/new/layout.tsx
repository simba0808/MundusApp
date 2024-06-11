import React from "react";

import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";
import TopReadCard from "@/lib/components/cards/TopReadCard";
import { top_reads } from "@/lib/components/landing/RelevantSection";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div>
        <div className="section-hero bg-[url('/landing.png')] bg-cover bg-no-repeat">
          <div className="section-hero flex justify-end">
            <div className="main-container">
              <div className="h-full flex items-end px-4 pb-6 md:pb-28">
                <div>
                  <h1>Revolutionary Discovery in Medicine</h1>
                  <p className="sub-title">
                    Researchers reveal significant breakthrough in the treatment
                    of chronic diseases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end max-w-[100vw] overflow-hidden mb-10">
          <div className="main-container">
            <div className="flex">
              <div className="w-full mt-8 px-4">{children}</div>
              <div className="sidebar-news lg:block hidden">
                <div className="pt-8 border-l-[1px] border-[#CCCCCC]">
                  <div className="flex items-center gap-2 py-6">
                    <div className="w-4 h-6 bg-[#273A8C] rounded-r-full"></div>
                    <h3 className="">MOST READ THIS WEEK</h3>
                  </div>
                  <div className="flex flex-col gap-4 pr-16">
                    {top_reads.map((item, index) => {
                      return (
                        <TopReadCard
                          key={item.content}
                          content={item.content}
                          imgUrl={`/topread${index + 1}.png`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
