import Image from 'next/image';

const SkillsWidget = ({ title, content, skills = [] }) => {
  return (
    <section className="w-full lg:w-[398px] h-[332px] flex flex-col gap-y-3 p-6 border border-zinc-100 dark:border-zinc-700/40 rounded-2xl">
      <h2 className="flex flex-row font-roboto leading-7 font-semibold text-zinc-900 dark:text-zinc-100 gap-3 items-center">
        <svg className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/5 dark:stroke-zinc-500" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 12.5L11.25 1.25L9 9.5H17.25L6.75 20.75L9 12.5H0.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {title}
        </h2>
      <p className=" text-sm text-zinc-600 dark:text-zinc-400">{content}</p>
      <ul className="flex flex-col pt-6 gap-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="w-[350px] h-12 gap-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[50px] h-[50px] ring-1 ring-zinc-900/5 rounded-full">
                <Image className="m-auto py-3" width={28} height={28} src={skill.icon} alt={`Item ${index} Name Icon`} />
              </div>
              <div className="w-[286px] h-12">
                <h3 className="font-medium font-sm text-zinc-900 leading-6 dark:text-zinc-100">{skill.name}</h3>
                <div className="w-[286px] h-6 flex flex-row gap-2 items-center justify-between border border-zinc-900/10 bg-zinc-200 dark:border-zinc-700/40 dark:bg-zinc-800">
                  <div className="bg-teal-500 h-[22px]" style={{width: `${skill.proficiency}%`}}/>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsWidget;
