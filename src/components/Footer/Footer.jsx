const Footer = ({ links = [] }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={'flex flex-col lg:flex-row justify-items-center justify-between pt-10 pb-16 px-36 border-t border-solid border-zinc-100 dark:border-zinc-700/40'}>
      <ul className="flex flex-row items-center gap-6">
        {links.map((link, index) => (
          <li key={index} className="py-2">
            <a className="text-zinc-800 dark:text-zinc-300" href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <p className="text-zinc-400 text-sm">© {year} John Doe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
