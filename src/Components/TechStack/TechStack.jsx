import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiPostman } from "react-icons/si";
import { SiDjango, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import python from "../../assets/icon/Python.svg";
import CPlusPlus from "../../assets/icon/CPlusPlus.svg";
const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-blue-600" />,
      },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },

      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Django", icon: <SiDjango className="text-green-500" /> },

      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-blue-400" />,
      },
    ],
  },
  {
    category: "Programming Languages",
    technologies: [
      { name: "C ", icon: <i className="devicon-c-plain colored"></i> },
      { name: "CPP", icon: <img src={CPlusPlus} className="h-6 w-6" /> },
      { name: "Python", icon: <img src={python} className="h-6 w-6" /> },
      { name: "SQL", icon: <AiOutlineConsoleSql className="text-blue-400" /> },
    ],
  },
  {
    category: "DevOps and Tools",
    technologies: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-[#f14e32]" />,
      },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
      {
        name: "PostMan",
        icon: <SiPostman className="text-[#FF6C37]" />,
      },
    ],
  },
];

const TechStack = () => {
  return (
    <div id="tech" className="text-white mt-16 lg:mt-24 mx-8 lg:mx-28">
      <h1 className="lg:text-center text-3xl lg:text-6xl font-semibold mb-8 lg:mb-12">
        Tech Stack
      </h1>
      {/* <div className="grid grid-cols-3 lg:flex lg:flex-wrap gap-4 lg:gap-16 text-center">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="grid  gap-2  lg:gap-0 place-content-center">
              <div>
                <img
                  src={skill.icon_link}
                  className="w-16 lg:w-28 h-16 lg:h-28"
                  alt=""
                />
                <p className="text-sm lg:text-lg  font-semibold">{skill.name}</p>
              </div>
            </div>
          );
        })}
      </div> */}

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center "
      >
        {skills.map((skill, index) => (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            key={index}
            className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full"
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              {skill.category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skill.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
