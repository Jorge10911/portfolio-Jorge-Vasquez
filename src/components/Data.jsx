import next from "next";

export const skills = [
    { name: 'HTML', proficiency: 60, icon: '/SkillsWidget/html5.svg' },
    { name: 'CSS', proficiency: 50, icon: '/SkillsWidget/css3.svg' },
    { name: 'JavaScript', proficiency: 75, icon: '/SkillsWidget/javascript.svg' },
  ];

export const work = [
    {
      logo: '/WorkWidget/slack.png',
      organization: 'Slack',
      jobTitle: 'Software Engineer',
      startYear: 2016,
      endYear: null,
    },
    {
      logo: '/WorkWidget/spotify.png',
      organization: 'Spotify',
      jobTitle: 'Software Engineer',
      startYear: 2014,
      endYear: 2015,
    },
    {
      logo: '/WorkWidget/audible.png',
      organization: 'Audible',
      jobTitle: 'Software Engineer',
      startYear: 2012,
      endYear: 2013,
    },
    {
      logo: '/WorkWidget/microsoft.png',
      organization: 'Microsoft',
      jobTitle: 'Software Engineer',
      startYear: 2010,
      endYear: 2011,
    }
  ];

export const footerLinks = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Uses',
      url: '/uses',
    },
  ];

export const navOptions = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/uses', label: 'Uses' },
  { path: '/about', label: 'About' },
  ];

export const socialLinks = [
    { icon: '/SocialLinks/github.svg', link: 'https://github.com' },
    { icon: '/SocialLinks/linkedin.svg', link: 'https://linkedin.com' },
    { icon: '/SocialLinks/twitter.svg', link: 'https://twitter.com' },
  ];

export const articleList = [
    {
      date: 'December 25, 2023',
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...',
      link: '/articles/my-first-article',
    },
    {
      date: 'December 25, 2023',
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...',
      link: '/articles/my-second-article',
    },
    {
      date: 'December 25, 2023',
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...',
      link: '/articles/my-third-article',
    },
  ];

export const workstationList =[
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]
export const developmentList =[
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]
export const designList =[
  {
    title: "Whimsical",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Figma",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]
export const productivityList =[
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
]

export const projectList = [
  {
    logo: '/ProjectCard/company.svg',
    name: 'Company',
    content: 'Creating technology to empower civilians to explore space on their own terms.',
    link: 'https://company.com',
  },
  {
    logo: '/ProjectCard/company.svg',
    name: 'Company',
    content: 'Creating technology to empower civilians to explore space on their own terms.',
    link: 'https://company.com',
  },
  {
    logo: '/ProjectCard/company.svg',
    name: 'Company',
    content: 'Creating technology to empower civilians to explore space on their own terms.',
    link: 'https://company.com',
  },
    {
      logo: '/ProjectCard/company.svg',
      name: 'Company',
      content: 'Creating technology to empower civilians to explore space on their own terms.',
      link: 'https://company.com',
    },
    {
      logo: '/ProjectCard/company.svg',
      name: 'Company',
      content: 'Creating technology to empower civilians to explore space on their own terms.',
      link: 'https://company.com',
    },
    {
      logo: '/ProjectCard/company.svg',
      name: 'Company',
      content: 'Creating technology to empower civilians to explore space on their own terms.',
      link: 'https://company.com',
    },
  ];
