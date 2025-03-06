// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shakeelaziz', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['shakeelaziz/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
         {
          title: 'LMS SED',
          description:
            'The Learning Management System by ASPIRE is designed to enhance learning experience with our structured course platform. Candidates can log-in using provided credentials, navigate assigned modules, and track your progress. The platform ensures sequential learning.',
          imageUrl:
            'https://play-lh.googleusercontent.com/nwMUJ-AbBUzg8HzcLS9FjtpYf_R_nrLRqOZGXLrlqtnAYamKSL_q42pd1Aivv6ts2Ak=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=sed.pmiu.aspirelms',
        },
        {
          
          title: 'Photo Translator App',
          description:
            'Photo translator instantly recognize & translate texts from restaurant menus, magazines, websites, road signs, books, descriptions etc. Translate photo, text & voice helps those who are traveling abroad and are facing problems in communication; those who are studying foreign languages, and for those who need image to text translation to work every day with documents in all languages.',
          imageUrl:
            'https://play-lh.googleusercontent.com/vKocsQ8f3V05TW3t3Ei13slKhq0CwG9m8MD1i46x7CDt-YDUOBPrjYsRf6FQnyGCdW4=s96-rw',
          link: 'https://play.google.com/store/apps/details?id=com.voicetranslator.cameratranslation.object.translate.all.language.translatorapp',
        },
        {
          title: 'GPS Map Camera',
          description:
            'GPStamp: GPS Map Stamp Camera is the ultimate app for capturing your moments with precise geolocation data and timestamp features. Whether you’re traveling or enjoying time with family and friends, this app ensures that every photo and video you take is tagged with accurate location, GPS coordinates, date, and time.',
          imageUrl:
            'https://play-lh.googleusercontent.com/4PBIcFMapwpTndNISOM6L-Ue1TTzXsmo8bq3lCX626HyhowTDylfvxhv_pczxfeHiVA=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.gpsmapcamera.phototimestamp.datestamper.gpscamera.photodatestamp.geotagapp',
        },
         {
          title: 'GPS Earth Map - 3D world maps',
          description:
            'Live Earth Map is one of the best 3d satellite view maps app that can facilitate you to discover the world and share your current location with your loved ones. 3D world map and satellite app use the gps & navigation feature to display all locations, explore nearby places are also a useful feature in earth live maps, easily spotting places around you at any time. Offline maps and distance finder app will help you to find distance between two points. Live satellite and earth maps, view app navigate you to reach the designation and plan your trip with route planner app and easily share location with friends.',
          imageUrl:
            'https://play-lh.googleusercontent.com/zYgKash4H2bLsRwpjyZqqsT7JNw28kfa7XRPJ9nd7itVISeN6v38rR8b6m2BCGEHDDti=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.liveearthmap.routfinder.gpsnavigation.weather.earthmaps.satelliteview',
        },
        {
          title: 'Screen Mirroring for Miracast',
          description:
            'The "All Screen Mirroring & Castify app" is a perfect screen mirroring smart tv cast tool, help you to cast and mirror your media content such as photos, videos, audio files, and PDF files on smart view screen mirroring. Allshare cast samsung smart view miracast is the free cast to tv and screen mirroring app for casting your favorite games on Smart TV View. The Web caster mirror app for Samsung smart view TV, helps you to search your favorite web series, movies, and TV shows from websites and mirror them on smart TV',
          imageUrl:
            'https://play-lh.googleusercontent.com/d1UvRGyK4Ne5D-lPf0HePOj5ST5IniJRVz1Tv7BlYpExdMoZOtPiKvtY8v_T2uJS24ri=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.screenmirroring.miracast.webvideo.casttotv.screencast',
        },
        {
          title: 'Digital Clock: Alarm Clock App',
          description:
            'Loud alarm clock: Smart Alarm & Battery charging animation shows the time and wallpapers. Loud alarm clock: Smart Alarm with battery charging animation shows the time clearly and accurately. Digital Clock allows you to set multiple alarms. Analog Clock features a specialized show for your learning, while digital clock help you follow time easily. Set alarms and hint with an easy-to-use digital clock app, while Loud alarm clock: Smart Alarm app that helps you remain on timetable every day. Never be late again with this exact clock widgets at your fingertips.',
          imageUrl:
            'https://play-lh.googleusercontent.com/NALbR9DiEytBSER-hOY0pE9G_qHHsPJyZWot-t92wLLkmZpzRk6_9r8OfH4wCsklcpb6=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.itickapps.alarmclock.nightclock.digitalclock.smartclock.ailivewallpaper',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Shakeel Ahmad',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shakeelaziz8',
    x: 'shakeel_az',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'neonk65',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+92-302-5918567',
    email: 'shakeel723472@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1B0QketsrYcGejgqObMVQLNOR6grjKoar/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kotlin',
    'Java',
    'Flutter',
    'Dart',
    'Firebase',
    'RESTAPIs',
    'MySQL/SDLite',
    'Room DB',
    'Git',
    'StateManagement(Provider, Bloc, Riverpod)',
'Responsive Design',
'Payment Integration(Stripe, Paypal, myFathoorah)',
'Google Maps',
'Version Control(GIT)',
'Google Play Console Configuration',
'Apple Store Configuration',
'Testing (Unit & Widget Testing)'
  ],
  experiences: [
    {
      company: 'PMIU-PESRP School Education Dept',
      position: 'Senior Software Engineer (Mobile Apps)',
      from: 'December 2024',
      to: 'Present',
      companyLink: 'https://pesrp.edu.pk/',
    },
    {
      company: 'Apptrick Technologies',
      position: 'Senior Android Developer',
      from: 'July 2022',
      to: 'August 2024',
      companyLink: 'https://www.linkedin.com/company/apptrick-net/?originalSubdomain=pk',
    },
     {
      company: 'iSoftic IT Solutions',
      position: 'Associate Android Developer',
      from: 'May 2021',
      to: 'June 2022',
      companyLink: 'https://isoftic.org/',
    },
     {
      company: 'BOT Solutions',
      position: 'Android Developer',
      from: 'August 2020',
      to: 'April 2021',
      companyLink: 'https://botsolutions.tech/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Quaid e Azam University Islamabad',
      degree: 'MS (information Science & Technology)',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'University of Peshawar',
      degree: 'BS (CS)',
      from: '2015',
      to: '2020',
    },
  ],
  publications: [ 
   
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'neonk65', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/shakeelaziz/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
