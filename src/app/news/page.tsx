"use client";

import { Tag } from "@/lib/components/landing/RelevantSection";
import NewsData from "./data.json";

export default function NewsPage() {
  return (
    <div className="my-8">
      <div className="flex flex-col gap-3">
        {NewsData.overview.map((overview, index) => {
          return (
            <p key={overview} className="leading-[18px]">
              {overview}
            </p>
          );
        })}
      </div>
      <div>
        <h2 className="text-center my-4">{NewsData.main_contents.title}</h2>
        <div className="flex flex-col gap-3">
          {NewsData.main_contents.contents.map((content) => {
            return (
              <p key={content} className="leading-[18px]">
                {content}
              </p>
            );
          })}
        </div>
        <div>
          {NewsData.sub_contents.map((sub_content, index) => {
            return (
              <div key={sub_content.title}>
                <h3 className="my-4">{sub_content.title}</h3>
                <div className="flex flex-col gap-3">
                  {sub_content.contents.map((content) => {
                    return (
                      <p key={content} className="leading-[18px]">
                        {content}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-10">
          <Tag topic="Health and Wellness" />
        </div>
        <div>
          <p>Tags: tag #1, tag #2, tag #3, tag #4</p>
        </div>
      </div>
    </div>
  );
}
