import UseCard from "@/components/UseCard/UsesCard";

const UsesSection = ({ groupName, items = [] }) => {
  return (
    <section className="flex flex-col p-[15px]">
      <div className="flex flex-col lg:flex-row justify-between gap-6 pl-[24px] border-l border-zinc-100 dark:border-zinc-700/40">
        <h2>{groupName}</h2>
        <div className="w-full flex flex-col gap-y-[32px]">
          {items.map((subitem, subIndex) => (
            <UseCard key={subIndex} title={subitem.title} description={subitem.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
