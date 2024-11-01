import UsesSection from "@/components/UsesSection/UsesSection";
import { workstationList, developmentList, designList, productivityList } from "@/components/Data";

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}

export default function Uses() {
  return (
    <div className="flex flex-col lg:pt-6 px-4 lg:px-36 gap-16 pb-16">
      <div className={"w-full lg:w-[672px] gap-[24px]"}>
        <h1 className="lg:text-zinc-800 dark:text-zinc-100 text-5xl leading-[56px] font-bold mb-4">
        Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-zinc-800  dark:text-zinc-100 mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
        </p>
      </div>
      <div className="flex flex-col gap-[80px]">
        <UsesSection groupName="Workstation" items={workstationList}/>
        <UsesSection groupName="Development Tools" items={developmentList}/>
        <UsesSection groupName="Design" items={designList}/>
        <UsesSection groupName="Productivity" items={productivityList}/>
      </div>
    </div>
  );
}
