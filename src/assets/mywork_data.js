import bytejobs from './bytejobs.png'
import learn_match from "./learn_match.png";
import Check_Inn from "./Check_Inn.png";
import shop_ease from "./Shop-Ease.png";
// const mywork_data = [
//   {
//     w_no: 1,
//     w_name: "ByteJobs (Currently Working)",
//     w_img: bytejobs,
//     description:'asdf',
//     live_link: "https://byte-jobs.vercel.app/",
//     frontend_code: "https://github.com/ashiqur-shohan/byteJobs-frontend",
//     backend_code: "https://github.com/ashiqur-shohan/bytejobs---backend",
//     skills: ["react", "django", "sqllite"],
//   },
//   {
//     w_no: 2,
//     w_name: "Shop Ease - (E-Commerce Web Site)",
//     w_img: shop_ease,
//     description:'asdf',
//     live_link: "https://shop-ease-ldly.onrender.com/",
//     source: "https://github.com/ashiqur-shohan/Shop-Ease",
//     skills: ["MVT", "Bootstrap"],
//   },
//   {
//     w_no: 3,
//     w_name: "Learn Match",
//     w_img: learn_match,
//     description:'asdf',
//     live_link: "https://learn-match.netlify.app/",
//     frontend_code: "https://github.com/ashiqur-shohan/Learn-Match",
//     backend_code: "https://github.com/ashiqur-shohan/Learn-Match---API",
//     skills: ["drf", "django", "js"],
//   },
//   {
//     w_no: 4,
//     w_name: "Check Inn",
//     w_img: Check_Inn,
//     description:'asdf',
//     live_link: "https://check-inn-68oz.onrender.com/",
//     source: "https://github.com/ashiqur-shohan/Check_Inn_Backend",
//     skills: ["mvt", "django", "js"],
//   },
// ];

export const projectData = [
  {
    id: 1,
    name: "ByteJobs",
    status: "In Progress",
    image: bytejobs,
    description:
      "A comprehensive job portal connecting tech talents with employers.",
    links: {
      live: "https://byte-jobs.vercel.app/",
      github: {
        frontend: "https://github.com/ashiqur-shohan/byteJobs-frontend",
        backend: "https://github.com/ashiqur-shohan/bytejobs---backend",
      },
    },
    technologiesUsed: [
      { name: "React", category: "Frontend" },
      { name: "Django", category: "Backend" },
      { name: "SQLite", category: "Database" },
    ],
    features: [
      "Job listing and search functionality",
      "User authentication and profiles",
      "Application tracking system",
    ],
    challengesSolved: "Implemented real-time updates for job listings.",
    dateStarted: "2023-09-01",
    lastUpdated: "2024-08-06",
  },
  {
    id: 2,
    name: "Shop Ease",
    status: "Completed",
    image: shop_ease,
    description:
      "An e-commerce platform for seamless online shopping experiences.",
    links: {
      live: "https://shop-ease-ldly.onrender.com/",
      github: "https://github.com/ashiqur-shohan/Shop-Ease",
    },
    technologiesUsed: [
      { name: "Django MVT", category: "Backend" },
      { name: "Bootstrap", category: "Frontend" },
    ],
    features: [
      "Product catalog with search and filter options",
      "Shopping cart functionality",
      "Secure checkout process",
    ],
    challengesSolved: "Optimized database queries for faster product loading.",
    dateCompleted: "2023-07-15",
    lastUpdated: "2023-07-15",
  },
  {
    id: 3,
    name: "Learn Match",
    status: "Completed",
    image: learn_match,
    description:
      "An educational platform matching learners with appropriate learning resources.",
    links: {
      live: "https://learn-match.netlify.app/",
      github: {
        frontend: "https://github.com/ashiqur-shohan/Learn-Match",
        backend: "https://github.com/ashiqur-shohan/Learn-Match---API",
      },
    },
    technologiesUsed: [
      { name: "Django Rest Framework", category: "Backend" },
      { name: "Django", category: "Backend" },
      { name: "JavaScript", category: "Frontend" },
    ],
    features: [
      "Personalized learning resource recommendations",
      "User progress tracking",
      "Interactive learning modules",
    ],
    challengesSolved:
      "Implemented an efficient matching algorithm for personalized content delivery.",
    dateCompleted: "2023-11-30",
    lastUpdated: "2023-11-30",
  },
  {
    id: 4,
    name: "Check Inn",
    status: "Completed",
    image: Check_Inn,
    description:
      "A hotel management system streamlining check-in and reservation processes.",
    links: {
      live: "https://check-inn-68oz.onrender.com/",
      github: "https://github.com/ashiqur-shohan/Check_Inn_Backend",
    },
    technologiesUsed: [
      { name: "Django MVT", category: "Backend" },
      { name: "JavaScript", category: "Frontend" },
    ],
    features: [
      "Online reservation system",
      "Room availability tracking",
      "Guest management dashboard",
    ],
    challengesSolved: "Developed a real-time room availability update system.",
    dateCompleted: "2023-10-15",
    lastUpdated: "2023-10-15",
  },
];



