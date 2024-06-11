import Image from "next/image";

export default function CustomSection() {
  const recent_news = [
    {
      title:
        "Global Summit Addresses Climate Crisis: Leaders Unveil Bold Initiatives for a Sustainable Future",
      content:
        "World leaders converge to tackle climate challenges, revealing groundbreaking strategies to foster global sustainability.",
      tag: "Environment and Sustainability",
    },
    {
      title:
        "Breakthrough in Medical Research: New Drug Shows Promise in Battling Resistant Diseases",
      content:
        "A groundbreaking pharmaceutical breakthrough offers hope in the fight against previously untreatable diseases.",
      tag: "Health and Wellness",
    },
    {
      title:
        "Tech Giants Unveil Latest Gadgets at Annual Expo: A Sneak Peek into the Future of Innovation",
      content:
        "Explore the forefront of innovation as industry giants showcase cutting-edge technologies and futuristic gadgets.",
      tag: "Science and Technology",
    },
    {
      title:
        "Political Upheaval: Unprecedented Changes in Government Spark National Debate",
      content:
        "Dramatic shifts in political landscapes prompt a nationwide discussion on the future direction of governance.",
      tag: "Politics",
    },
    {
      title:
        "Space Exploration Milestone: NASA's Rover Makes Startling Discoveries on Mars",
      content:
        "NASA's rover reveals astonishing findings, reshaping our understanding of the Martian landscape and potential for life.",
      tag: "Science and Technology",
    },
    {
      title:
        "Economic Trends 2024: Experts Analyze Shifts in Global Markets and Financial Strategies",
      content:
        "Analysts dissect evolving economic landscapes, providing insights into global market shifts and strategic financial planning.",
      tag: "Business and Finance",
    },
    {
      title:
        "Crisis Averted: Humanitarian Efforts Bring Relief to Region Facing Natural Disaster",
      content:
        "Collaborative humanitarian efforts succeed in alleviating the aftermath of a natural disaster, offering hope to affected regions.",
      tag: "Breaking News",
    },
    {
      title:
        "Entertainment Buzz: Blockbuster Film Breaks Records, Redefining Cinematic Success",
      content:
        "A cinematic masterpiece shatters records, setting a new standard for success and captivating audiences worldwide.",
      tag: "Entertainment",
    },
    {
      title:
        "Health and Wellness Revolution: The Rise of New Fitness Trends and Holistic Practices",
      content:
        "Discover the latest trends in health and wellness, as innovative fitness approaches and holistic practices gain popularity.",
      tag: "Health and Wellness",
    },
    {
      title:
        "Cybersecurity Alert: Major Data Breach Exposes Vulnerabilities in Online Systems",
      content:
        "A significant data breach underscores the urgency of addressing cybersecurity concerns, highlighting vulnerabilities in online platforms.",
      tag: "Science and Technology",
    },
  ];

  const Tag = ({ className, topic }: { className?: string; topic: string }) => {
    return (
      <span className="px-4 py-1 md:py-2 text-[8px] md:text-[12px] font-medium border-[1px] border-black rounded-full">
        {topic}
      </span>
    );
  };

  return (
    <section className="flex justify-end mb-10">
      <div className="main-container px-4">
        <div className="mt-8">
          <h3 className="py-6">RECENT NEWS</h3>
          <div className="md:max-w-[90%] mx-auto flex flex-col gap-4">
            {recent_news.map((item, index) => {
              return (
                <div key={item.title} className="flex gap-6">
                  <Image
                    className="max-w-[40%] h-auto"
                    src={`/topics/recent${index + 1}.png`}
                    width={300}
                    height={200}
                    unoptimized
                    alt="Photo"
                  />
                  <div className="">
                    <p className="medium-content">{item.title}</p>
                    <p className="hidden md:block news-content mt-2">
                      {item.content}
                    </p>
                    <div className="md:mt-4">
                      <Tag topic={item.tag} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
