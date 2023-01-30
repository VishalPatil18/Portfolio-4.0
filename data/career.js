import { pwc_logo, centrestage_logo } from './images';

const careerData = [
  {
    companyName: 'PriceWaterhouse Coopers India',
    role: 'Technology Consultant Intern',
    description: [
      'Worked on building the Data Trust and Traceability Platform.',
      'Performed a Graph Database Analysis to find a graph database for performing the Data Lineage.',
      'Implemented Neo4j Graph Database on the Server and connected that with the Angular Frontend.',
      'Created a Graph Database using a real-world database having 19Lakh+ records.'
    ],
    time: 'May 2022 - August 2022',
    link: 'https://www.pwc.in',
    stack: ['angular', 'typescript', 'neo4j'],
    logo: pwc_logo
  },
  {
    companyName: 'CentreStage.live',
    role: 'Fullstack Developer Intern',
    description: [
      'Worked on the Automated Email System and WhatsApp notification System',
      'Used the smtplib module and Twilio to automate the website.',
      'Developed 33 Email Templates and 20 WhatsApp notification templates.',
      'Created a Graph Database using a real-world database having 19Lakh+ records.'
    ],
    time: 'Feb 2021 - April 2021',
    link: 'https://www.centrestage.live/',
    stack: ['python', 'twilio', 'js', 'html'],
    logo: centrestage_logo
  }
];

export default careerData;
