import { RoleType, type Experience } from './experience.types';
import CheilLogo from '@assets/cheil-logo.png';
import JacksLogo from '@assets/jacks-logo.jpeg';
import MantelLogo from '@assets/mantel-logo.png';

export const experienceList: Experience[] = [
  {
    companyName: 'Mantel Group',
    companyImage: MantelLogo,
    roles: [
      {
        title: 'Senior Software Engineer',
        type: RoleType.FullTime,
        startDate: 'December 2025',
        description: [
          "Built Guardian, Lendi Group's customer-facing, agentic mortgage assistant that guides customers through refinancing and property purchases. It provides personalised home loan information, captures customer details, and seamlessly transitions qualified leads to mortgage brokers via appointment booking or live handoff.",
          'Developed internal AI capabilities for Lendi Group, enabling teams to build, orchestrate, and manage reusable agentic workflows across multiple business use cases.',
        ],
      },
      {
        title: 'Software Engineer',
        type: RoleType.FullTime,
        startDate: 'March 2024',
        endDate: 'December 2025',
        description: [
          'Developed the Solo by MYOB mobile application from the ground up in a cross-functional team, delivering the product in under 12 months using React Native and GraphQL.',
          'One of two engineers responsible for implementing Tap to Pay in Solo by MYOB, a flagship feature that differentiates the application in the market.',
          'Modernised segments of the UI of the legacy Xero Practice Manager (XPM) application.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        type: RoleType.FullTime,
        startDate: 'February 2023',
        endDate: 'March 2024',
        description: [
          'Part of the Mantel Generative AI Dev team and was one of the main developers that worked on the generative AI solution accelerator which kickstarted and supported multiple client projects.',
          'Led a few generative AI demos for clients experimenting with text-to-text generation, multimodal image and text generation, and LLM to API flows',
        ],
      },
    ],
  },
  {
    companyName: 'Cheil Australia',
    companyImage: CheilLogo,
    roles: [
      {
        title: 'Junior Frontend Developer',
        type: RoleType.FullTime,
        startDate: 'August 2022',
        endDate: 'December 2022',
        description: [
          'Sole front-end developer in the Samsung BESPOKE Fridge Configurator project. This project involved building variations of the configurator to go on in-store tablets for Harvey Norman, The Good Guys, and Winnings Appliances, and also supplying the code for the configurator to these retailers to integrate into their websites.',
          'Sole front-end developer for CRO (Conversion Rate Optimisation) projects working closely with the UX/Optimisation team to scope out the feasibility of projects/tests and conducting A/B testing through Adobe Target to collect data on user experiences with new designs.',
        ],
      },
      {
        title: 'Digital Experience Intern',
        type: RoleType.Internship,
        startDate: 'May 2022',
        endDate: 'August 2022',
        description: [
          'Creating and editing components on Samsung website and Samsung e-commerce website',
          'Working with HTML, CSS/Sass, JavaScript, gulp.js, jQuery, Bitbucket, and Figma',
        ],
      },
    ],
  },
  {
    roles: [
      {
        title: 'Freelance Frontend Developer',
        type: RoleType.Freelance,
        startDate: 'March 2022',
        endDate: 'May 2022',
        description: [
          'Worked with multiple clients through Fiverr, working on the front-end of their websites',
          'Worked with React, JavaScript, TypeScript, Tailwind CSS, Sass, and Web3 technologies such as ethers',
        ],
      },
    ],
  },
  {
    companyName: "Jack's of Fiji",
    companyImage: JacksLogo,
    roles: [
      {
        title: 'Frontend Developer',
        type: RoleType.Internship,
        startDate: 'January 2022',
        endDate: 'April 2022',
        description: [
          "Worked in a team to push a website for one of the Jack's of Fiji restaurants to production",
          'Worked with Wordpress and used custom CSS to style the website according to designs',
        ],
      },
    ],
  },
];
