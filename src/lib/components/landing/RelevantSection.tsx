import { twMerge } from "tailwind-merge";

import NewsCard from "@/lib/components/cards/NewsCard";
import TopReadCard from "@/lib/components/cards/TopReadCard";

export const topics = [
  "Breaking News",
  "Science and Technology",
  "Business and Finance",
  "Health and Wellness",
  "Entertainment",
  "Sports",
  "Politics",
  "Environment and Sustainability",
  "Lifestyle and Fashion",
  "Travel and Leisure",
  "Education",
  "Food",
];

export const Tag = ({
  className,
  topic,
}: {
  className?: string;
  topic: string;
}) => {
  return (
    <span
      className={twMerge(
        "px-4 py-2 text-[12px] font-medium border-[1px] border-black rounded-full",
        className
      )}
    >
      {topic}
    </span>
  );
};

export default function RelevantSection() {
  const news_contents = [
    "AI Advancements in Healthcare: A Glimpse into the Future",
    "Space Exploration Milestone: New Discoveries Beyond Our Solar System",
    "Next-Gen Robotics: Transformative Innovations Reshaping Industries",
    "Tech Giants' Latest Endeavors: Unveiling Future Innovations",
    "Sustainable Business Practices: Companies Leading the Way",
    "Cryptocurrency Revolution: Exploring the Future of Digital Finance",
    "Emerging Talents in the Music Industry: Artists on the Rise",
    "Artistic Expressions in the Digital Age: The Intersection of Technology and Creativity",
    "Literary Marvels: New Books Redefining the Written Word",
  ];

  const card_contents = [
    {
      title: "Breakthrough in Renewable Energy Sources",
      text: "Scientists unveil a game-changing discovery in renewable energy technology",
      imgUrl: "/energy.png",
    },
    {
      title: "Global Market Trends: Navigating the Economic La...",
      text: "An in-depth analysis of current market trends and their impact on the global economy.",
      imgUrl: "/market.png",
    },
    {
      title: "Cinematic Masterpieces: Must-Watch Films of the Ye...",
      text: "A curated list of outstanding films that have captivated audiences and critics alike.",
      imgUrl: "/popcorn.png",
    },
  ];

  const top_reads = [
    {
      content:
        "Research Unveils Consumer Trends Shaping the Future: Discover the Most Impactful Changes",
    },
    {
      content:
        "Exclusive Interview: Innovative Entrepreneur Shares Secrets of Success in the Business World",
    },
    {
      content:
        "Explore Emerging Technologies That Are Revolutionizing the Industry and Changing Our Daily Lives",
    },
    {
      content: "How AI is Redefining Everyday Tasks and Enhancing Efficiency",
    },
  ];

  return (
    <section className="flex justify-end max-w-[100vw] overflow-hidden">
      <div className="main-container">
        <div className="flex">
          <div className="w-full mt-8 px-4">
            <h3 className="py-6">RELEVANT NEWS</h3>
            <div className="flex gap-x-4">
              {card_contents.map((item, index) => {
                return (
                  <div key={index} className="min-w-[300px] max-w-[400px]">
                    <NewsCard
                      key={index}
                      title={item.title}
                      text={item.text}
                      imgUrl={item.imgUrl}
                    />
                    <div className="px-4 mt-6 flex flex-col gap-4 max-w-[300px]">
                      {news_contents
                        .slice(index * 3, (index + 1) * 3)
                        .map((item) => {
                          return (
                            <p
                              key={item}
                              className="news-title hover:cursor-pointer hover:text-gray-500"
                            >
                              {item}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hidden lg:block mt-10">
              <h3 className="text-[32px] leading-[48px] mb-1">
                CUSTOMIZE YOUR EXPERIENCE
              </h3>
              <p className="news-title font-medium leading-[24px]">
                Select your favourite categories and keep up to date with what
                matters to you
              </p>
              <div className="py-2 flex flex-wrap gap-[10px]">
                {topics.map((topic) => {
                  return <Tag key={topic} topic={topic} />;
                })}
              </div>
            </div>
          </div>
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
                      key={index}
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
    </section>
  );
}
