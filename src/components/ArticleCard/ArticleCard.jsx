  const ArticleCard = ({articleList = []}) => {
  return (
  <div className="article-card-container flex flex-col lg:w-[512px] py-8">
    <ul className="flex flex-col lg:p-8 gap-10">
    {articleList?.map((article, index) => (
      <li key={index}>
        <article data-testid={`articleCard${index}`} className="article-card">
          <div className="article-card-time relative flex flex-row gap-x-3">
            <span className="absolute bottom-1.5 left-0 w-[2px] h-[16px] rounded-full bg-zinc-200"/>
            <time className="pl-3 font-roboto text-sm leading-7 text-zinc-400 gap-3">
              {article.date}
            </time>
          </div>
          <h2 className="pt-4 text-zinc-800 font-roboto font-semibold leading-7 dark:text-zinc-100 ">
            {article.title}
          </h2>
          <p className="font-roboto text-sm text-zinc-600 leading-6 dark:text-zinc-400">
            {article.content}
          </p>
          <a className="relative flex flex-row content-end pt-4 gap-4 text-teal-500 font-bold hover:underline" href={article.link || '#'}>
            Read article
            <svg className="fill-teal-500 relative top-[9.5px] hover:b" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.220072 0.220011C0.360698 0.0795608 0.551322 0.000671387 0.750072 0.000671387C0.948823 0.000671387 1.13945 0.0795608 1.28007 0.220011L4.53007 3.47001C4.67052 3.61064 4.74941 3.80126 4.74941 4.00001C4.74941 4.19876 4.67052 4.38939 4.53007 4.53001L1.28007 7.78001C1.1379 7.91249 0.949851 7.98461 0.75555 7.98119C0.561249 7.97776 0.375864 7.89905 0.238451 7.76163C0.101038 7.62422 0.0223258 7.43883 0.0188975 7.24453C0.0154693 7.05023 0.0875923 6.86219 0.220072 6.72001L2.94007 4.00001L0.220072 1.28001C0.0796218 1.13939 0.000732422 0.948762 0.000732422 0.750011C0.000732422 0.551261 0.0796218 0.360637 0.220072 0.220011Z" />
            </svg>
          </a>
        </article>
      </li>
      ))}
    </ul>
  </div>
  );
};

export default ArticleCard;
