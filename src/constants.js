export const EXPERIENCE_ID = 'experienceSection';

export const DEFAULT_DRAWER_STATE = {
  skills: false,
  experience: false,
};

export const OFFLINE_CONFIG = {
  siteTitle: "Jeremy Stover's Resume",
  manifestName: 'Resume',
  manifestShortName: 'Landing',
  manifestStartUrl: '/',
  manifestBackgroundColor: '#1289A7',
  manifestThemeColor: '#1289A7',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: '/gatsby-starter-resume/',
  firstName: 'Jeremy',
  lastName: 'Stover',
  socialLinks: [
    { icon: 'fa-github', name: 'Github', url: 'https://github.com/kadajett' },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/kadajett/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/thewanderingscholar',
    },
  ],
  email: 'i@jeremyscript.com',
  calendly: 'https://calendly.com/kadajett',
  address: 'Boston, MA',
  bioCopy:
    'I have a passion for building great web applications. I have brought projects from an empty text file to millions of users multiple times in my career. What can I help you build?',
  jobHistory: [
    {
      jobTitle: 'Senior Software Engineer',
      companyName: 'Wayfair.com',
      description: `I spent my time at Wayfair converting their monolith react component into a sleek, modern, easy to use library.
            With almost 100% unit test coverage, storybook integration, automatic lighthouse accessability ratings, and comprehensive docs, the new component replaces all custom implementations around the company.
            Millions of users utilize this code per day.  
            `,
      startDate: 'August 2019',
      endDate: 'Present',
    },
    {
      jobTitle: 'Senior Software Engineer',
      companyName: 'ForHers.com',
      description: `At ForHers.com I spent my time building an app that helped to provide birth control to women all across the US. 
        The site was built with react powered by a highly customizable CMS. I believe it has changed drastically since my time at the company, but I am happy to have had a part in equalizing healthcare access.`,
      startDate: 'September 2018',
      endDate: 'August 2019',
    },
  ],
};
