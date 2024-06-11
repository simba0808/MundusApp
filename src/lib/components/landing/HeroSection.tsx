export default function HeroSection() {
  return (
    <div className="section-hero bg-[url('/landing.png')] bg-cover bg-no-repeat">
      <div className="section-hero flex justify-end">
        <div className="main-container">
          <div className="h-full flex">
            <div className="w-full flex items-end px-4 pb-10">
              <div>
                <h2>Revolutionary Discovery in Medicine</h2>
                <p className="sub-title">
                  Researchers reveal significant breakthrough in the treatment
                  of chronic diseases
                </p>
              </div>
            </div>
            <div className="sidebar-news w-full hidden lg:block">
              <div className="h-full flex items-end pb-10 border-l-[1px] border-[#CCCCCC]">
                <div className="flex flex-col justify-end">
                  <div>
                    <h3 className="px-6 text-white">Related News</h3>
                    <div className="pr-16">
                      <div className="p-6 max-w-[350px]">
                        <p className="text-[20px] font-bold text-white">
                          Advancements in Gene Therapy
                        </p>
                        <p className="text-[16px] font-medium text-white">
                          Scientists discuss how gene therapy is becoming a
                          promising treatment option.
                        </p>
                      </div>
                      <div className="h-[1px] bg-[#CCCCCC]"></div>
                      <div className="p-6 pb-0 max-w-[350px]">
                        <p className="text-[20px] font-bold text-white">
                          Exclusive Interview with Experts
                        </p>
                        <p className="text-[16px] font-medium text-white">
                          Experts comment on the potential impacts of these
                          discoveries on the global medical landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
