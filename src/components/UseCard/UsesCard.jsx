/* DON'T CHANGE ME */

const UsesCard = ({ title, description }) => {
  return (
    <div className={"flex flex-col gap-4 w-full lg:max-width-[577px]"}>
      <h3 className={"m-0 font-lg text-bold"}>{title}</h3>
      <p className={"text-zinc-600 text-sm leading-6"}>{description}</p>
    </div>
  );
};

export default UsesCard;
