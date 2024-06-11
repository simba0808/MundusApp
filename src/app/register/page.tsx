import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { Tag } from "@/lib/components/landing/RelevantSection";
import { topics } from "@/lib/components/landing/RelevantSection";

const InputField = ({
  label,
  id,
  className,
}: {
  label: string;
  id?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "xl:max-w-[400px] 2xl:max-w-[500px] flex items-center justify-between",
        className
      )}
    >
      <span className="w-[90px] text-[12px]">{label}</span>
      <input
        id={id}
        className="grow p-1 border-[1px] border-border-gray rounded-md focus:outline-none"
        type="text"
      />
    </div>
  );
};

export default function RegisterForm() {
  return (
    <div className="max-w-[80%] mx-auto my-6 flex flex-col gap-4">
      <div>
        <div className="flex justify-between">
          <div className="mr-20">
            <Image
              className="w-full"
              src="/avatar.svg"
              width={100}
              height={100}
              alt="Avatar"
            />
          </div>
          <div className="max-w-[80%] w-full">
            <h2 className="underline">Personal Information</h2>
            <div className="flex justify-end mt-2">
              <div className="flex justify-between w-[90%]">
                <div className="flex flex-col gap-2 max-w-[45%] w-full">
                  <InputField label="Name" />
                  <InputField label="Birth Date" />
                  <InputField label="Gender" />
                  <InputField label="Language" />
                </div>
                <div className="flex gap-3 max-w-[50%] w-full">
                  <p>Biography</p>
                  <textarea className="w-full !h-full border-[1px] border-border-gray rounded-md focus:outline-none resize-none"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="mr-20"></div>
          <div className="max-w-[80%] w-full">
            <h2 className="underline">Address Information</h2>
            <div className="flex justify-end mt-2">
              <div className="flex justify-between w-[90%]">
                <div className="flex flex-col gap-2 mt-2 w-full">
                  <div className="flex justify-between gap-4">
                    <InputField label="Country" className="w-full" />
                    <InputField label="Zipcode" className="w-full" />
                  </div>
                  <div className="flex justify-between gap-4">
                    <InputField label="City" className="w-full" />
                    <InputField label="District" className="w-full" />
                  </div>
                  <InputField
                    label="Address #1"
                    className="!max-w-[100%] w-full"
                  />
                  <InputField
                    label="Address #2"
                    className="!max-w-[100%] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="mr-20"></div>
          <div className="max-w-[80%] w-full">
            <h2 className="underline">CONTACT AND LOGIN</h2>
            <div className="flex justify-end">
              <div className="w-[90%] flex flex-col gap-2 mt-2">
                <InputField label="E-mail" className="w-full" />
                <InputField label="Phone" className="w-full" />
                <div className="flex items-center gap-10">
                  <span>Sync other social media:</span>
                  <div className="flex gap-2">
                    <span className="p-2 border-[1px] rounded-lg hover:cursor-pointer active:bg-gray-100">
                      <Image
                        src="/google.svg"
                        width={20}
                        height={20}
                        alt="Google"
                      />
                    </span>
                    <span className="p-2 border-[1px] rounded-lg hover:cursor-pointer active:bg-gray-100">
                      <Image
                        src="/facebook.svg"
                        width={20}
                        height={20}
                        alt="Google"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="mr-20"></div>
          <div className="max-w-[80%] w-full">
            <h2 className="underline">CUSTOMIZE YOUR EXPERIENCE</h2>
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
      </div>
    </div>
  );
}
