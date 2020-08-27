module.exports = {
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
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/kadajett',
    },
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
      description:
        'I spent my time at Wayfair converting their monolith react component into a sleek, modern, easy to use library. With almost 100% unit test coverage, storybook integration, automatic lighthouse accessability ratings, and comprehensive docs, the new component replaces all custom implementations around the company. Millions of users utilize this code per day.',
      startDate: 'August 2019',
      endDate: 'Present',
    },
    {
      jobTitle: 'Senior Software Engineer',
      companyName: 'ForHers.com',
      description:
        'At ForHers.com I spent my time building an app that helped to provide birth control to women all across the US. The site was built with react powered by a highly customizable CMS. I believe it has changed drastically since my time at the company, but I am happy to have had a part in equalizing healthcare access.',
      startDate: 'September 2018',
      endDate: 'August 2019',
    },
    {
      jobTitle: 'Senior Software Engineer',
      companyName: 'Ellation, (Crunchyroll, VRV)',
      description: `I was brought on to the team here to build out a multitool video player that was fully configurable, with built in analytics, and video ads. Due to license reasons, this was built from scratch. This included building a large state engine that controlled a large portion of the application. This video player was deployed to many devices including couch devices that allow javascript. (Chromecast, smart tvs, xbox, ps4, ps3) And will be used by the entire 9+ million unique person user base of Ellation. 
        This was all done in vanilla js as it gave us better control over what was being deployed to older devices that had performance issues, not including the lack of modern JS apis around media elements.
        `,
      startDate: 'March 2016',
      endDate: 'August 2018',
    },
    {
      jobTitle: 'Senior Software Engineer',
      companyName: 'RidePal',
      description: `Ridepal is a shared commuter bus service. They are a proxy between bus vendors (Black Tie, Bauer, Lux, ETC.) and riders looking for a way to get to and from work, without the hassle of driving. They offer a sophisticated bus entry tag-in system, bus tracking and alerts, as well as simple tracking and offers for HR reps for companies in the Bay Area and Los Angeles`,
      startDate: 'July 2013',
      endDate: 'May 2015',
    },
  ],
  skills: [
    'fa-node-js',
    'fa-react',
    'fa-sass',
    'fa-angular',
    'fa-gulp',
    'fa-npm',
  ],
};
