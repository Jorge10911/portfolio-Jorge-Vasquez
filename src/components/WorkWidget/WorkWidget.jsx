import Image from 'next/image';

const WorkWidget = ({ title, content, experiences = [] }) => {
  return (
    <section className="w-[398px] h-[396px] gap-3 flex flex-col p-6 border border-zinc-100 dark:border-zinc-700/40 rounded-2xl ">
      <div className="flex flex-row w-[350px] h-7 gap-x-3">
        <svg className="stroke-zinc-400 dark:stroke-zinc-500 fill-zinc-100 dark:fill-zinc-100/5 " width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2501 12.15V16.4C18.2501 17.494 17.4631 18.436 16.3781 18.58C14.2911 18.857 12.1621 19 10.0001 19C7.83806 19 5.70905 18.857 3.62206 18.58C2.53706 18.436 1.75006 17.494 1.75006 16.4V12.15M18.2501 12.15C18.4875 11.9436 18.6775 11.6883 18.807 11.4016C18.9364 11.1149 19.0023 10.8036 19.0001 10.489V6.706C19.0001 5.625 18.2321 4.691 17.1631 4.531C16.0304 4.36142 14.892 4.23234 13.7501 4.144M18.2501 12.15C18.0561 12.315 17.8301 12.445 17.5771 12.53C15.1333 13.3408 12.5748 13.7528 10.0001 13.75C7.35206 13.75 4.80506 13.321 2.42306 12.53C2.17631 12.4479 1.94778 12.3189 1.75006 12.15M1.75006 12.15C1.5126 11.9436 1.32262 11.6883 1.19315 11.4016C1.06369 11.1149 0.997818 10.8036 1.00006 10.489V6.706C1.00006 5.625 1.76806 4.691 2.83706 4.531C3.96975 4.36142 5.10814 4.23233 6.25006 4.144M13.7501 4.144V3.25C13.7501 2.65326 13.513 2.08097 13.091 1.65901C12.6691 1.23705 12.0968 1 11.5001 1H8.50006C7.90332 1 7.33102 1.23705 6.90907 1.65901C6.48711 2.08097 6.25006 2.65326 6.25006 3.25V4.144M13.7501 4.144C11.2538 3.95108 8.74633 3.95108 6.25006 4.144H13.7501ZM10.0001 10.75H10.0081V10.758H10.0001V10.75Z"/>
          <path d="M18.2501 12.15V16.4C18.2501 17.494 17.4631 18.436 16.3781 18.58C14.2911 18.857 12.1621 19 10.0001 19C7.83806 19 5.70906 18.857 3.62206 18.58C2.53706 18.436 1.75006 17.494 1.75006 16.4V12.15M18.2501 12.15C18.4875 11.9436 18.6775 11.6883 18.807 11.4016C18.9364 11.1149 19.0023 10.8036 19.0001 10.489V6.706C19.0001 5.625 18.2321 4.691 17.1631 4.531C16.0304 4.36142 14.892 4.23234 13.7501 4.144M18.2501 12.15C18.0561 12.315 17.8301 12.445 17.5771 12.53C15.1333 13.3408 12.5748 13.7528 10.0001 13.75C7.35206 13.75 4.80506 13.321 2.42306 12.53C2.17631 12.4479 1.94778 12.3189 1.75006 12.15M1.75006 12.15C1.5126 11.9436 1.32262 11.6883 1.19315 11.4016C1.06369 11.1149 0.997818 10.8036 1.00006 10.489V6.706C1.00006 5.625 1.76806 4.691 2.83706 4.531C3.96975 4.36142 5.10814 4.23233 6.25006 4.144M13.7501 4.144V3.25C13.7501 2.65326 13.513 2.08097 13.091 1.65901C12.6691 1.23705 12.0968 1 11.5001 1H8.50006C7.90332 1 7.33102 1.23705 6.90907 1.65901C6.48711 2.08097 6.25006 2.65326 6.25006 3.25V4.144M13.7501 4.144C11.2538 3.95108 8.74633 3.95108 6.25006 4.144M10.0001 10.75H10.0081V10.758H10.0001V10.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h2 className="font-bold leading-7 dark:text-zinc-100 text-zinc-900">{title}</h2>
      </div>
      <p className="w-[350px] h-12 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{content}</p>
      <ul className="flex flex-col w-[350px] h-[264px] pt-6 gap-4">
        {experiences.map((experience, index) => (
          <li key={index} className="w-[350px] h-12 flex flex-row gap-4">
            <Image className="rounded-full" src={experience.logo} width={40} height={40} alt={`Item${index} Logo`} />
            <div className="flex flex-col gap-1 grow">
              <h3 className="text-sm font-medium leading-6">{experience.organization}</h3>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xs leading-6 text-zinc-500 dark:text-zinc-400 uppercase">{experience.jobTitle}</p>
                <span className="text-xs leading-6 text-zinc-400 dark:text-zinc-500">
                  {experience.startYear} - {experience.endYear || 'current'}
                </span> 
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};


export default WorkWidget;