module.exports = {
  siteTitle: 'Jeremy Stover\'s Resume' , // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#1289A7',
  manifestThemeColor: '#1289A7',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Jeremy',
  lastName: 'Stover',
  // social
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
    }
  ],
  email: 'i@jeremyscript.com',
  calendly: 'https://calendly.com/kadajett',
  address: 'Boston, MA',
};
