import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'LEO',
  description: "Leonardo Perez Resume written by NextJS",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi👋🏻 this is Leo`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Colombia based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Upwork Inc</strong>.<br/>
        I have completed my bachelor's degree in computer science from Antioquia Technological Institute
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      In my free time, I enjoy <strong className="text-stone-100">Hiking</strong> and <strong className="text-stone-100">Gardening</strong>. I always love spending a lot of time with my <strong className="text-stone-100">Family</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '../images/leo.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have a broad vision regarding all the software development process. My experience in different sectors of the industry allows me to create integral solutions that provide value to the process.`,
  aboutItems: [
    {label: 'Location', text: 'Medellin, Colombia', Icon: MapIcon},
    // {label: 'Age', text: '46', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Columbian / Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Hiking, Gardening', Icon: SparklesIcon},
    {label: 'Study', text: 'Tecnológico de Antioquia', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Koala Solutions Inc', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Swift',
        level: 10,
      },
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'Xamarin',
        level: 8,
      },
      {
        name: 'Ionic',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'DMS Mobile',
    description: 'Software solutions for the Automotive and retail industry in the Latin American market',
    url: 'https://apps.apple.com/us/app/dms-mobile/id6446655129',
    image: porfolioImage8,
  },
  {
    title: 'Keyboard Extension - iOS',
    description: 'https://apps.apple.com/app/id1497411513',
    url: 'https://github.com/ghleoperez/Keyboard',
    image: porfolioImage2,
  },
  {
    title: 'ELK Product Inc',
    description: 'iOS - House Control App',
    url: 'https://apps.apple.com/us/app/elk-connect/id1565150595',
    image: porfolioImage3,
  },
  {
    title: 'Health & Fitness',
    description: 'Carbs Calory Calculator / Ionic Framework',
    url: 'https://apps.apple.com/us/app/lazy-keto-diet-meal-planner/id1466180330',
    image: porfolioImage4,
  },
  {
    title: 'LuckyCloud App',
    description: 'Cloud Storage Management (iOS, Android)',
    url: 'https://apps.apple.com/us/app/luckycloud/id1599646505',
    image: porfolioImage5,
  },
  {
    title: 'WorkOut App',
    description: 'GetToWorkOut, Ionic Framework, Google Firebase',
    url: 'https://apps.apple.com/us/app/gettoworkout-fitness-app/id1151050035',
    image: porfolioImage6,
  },
  {
    title: 'ELD App',
    description: 'The Hutch ELD is the First and Only ELD based on PAYD (Pay-As-You-Drive) model. It meets all FMCSA ELD requirements and is listed on FMCSA registered ELD. The Hutch ELD is powered by Hutch Systems and is trusted by clients across USA and Canada',
    url: 'https://apps.apple.com/us/app/hutch-eld/id1639929044',
    image: porfolioImage7,
  },
  {
    title: 'Pet Website',
    description: 'FitPUP',
    url: 'https://fitpupapp.com/',
    image: porfolioImage9,
  },
  {
    title: 'iOS - VFX Plates App',
    description: '360 Video player using RealityKit, ARKit, SwiftUI',
    url: 'https://www.youtube.com/watch?v=QnzF7fOlpXs&list=WL&index=12&ab_channel=DavidC.SmithDP',
    image: porfolioImage1,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 1999 - Sep 2004',
    location: 'DMS SAS',
    title: 'Lead Developer',
    content: (
      <p>
        Software solutions for the Automotive and retail industry in the Latin American market.
      </p>
    ),
  },
  {
    date: '2004 - Present',
    location: 'Koala Solutions',
    title: 'Software Engineer',
    content: (
      <p>
        This is my brand, I have develop software for more than 20 years in different sectors
      </p>
    ),
  },
  {
    date: 'July 2023 - August 2023',
    location: 'Plate Pros',
    title: 'iOS Developer',
    content: (
      <p>
        Created 360-degree camera app using Swift/SwiftUI, RealityKit, ARKit etc.
      </p>
    ),
  },
  {
    date: 'Jan 2023 - August 2023',
    location: 'Hutch Systems',
    title: 'Junior Bug Fixer',
    content: (
      <p>
        Fix mobile bugs concerning with ELD of Vehicles [Xamarin, Swift, Java projects]
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Eric Ellis',
      text: 'Leonardo\'s iOS development skills were exceptional for our PlatePro project. His problem-solving, communication, and teamwork were commendable. A reliable and talented developer who delivered high-quality results. Highly recommended!!',
      image: '../images/eric.jpg',
    },//https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg
    {
      name: 'Ivan Moyanov',
      text: 'Leonardo is a highly skilled and dedicated professional who consistently delivers exceptional results. He possesses a deep understanding of his field and maintains a positive and collaborative attitude. Leonardo\'s excellent communication and problem-solving abilities have been invaluable to this project. Overall, he is recommended for his professionalism, expertise, and enthusiasm, making him a valuable asset to any project or organization.',
      image: '../images/ivan.jpg',//https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg
    },
    {
      name: 'Gary Dhaliwal',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'happyleonardo77@gmail.com',
      href: 'mailto:happyleonardo77@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Medellin, Colombia',
      href: 'https://www.google.com/maps/place/Medell%C3%ADn,+Medellin,+Antioquia,+Colombia/@6.244197,-75.6637847,12z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'ghleoperez',
      href: 'https://github.com/ghleoperez',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ghleoperez'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/5415768/leonardo-perez'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
