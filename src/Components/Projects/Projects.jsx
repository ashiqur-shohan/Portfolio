import {projectData} from "../../assets/mywork_data";

import { motion } from "framer-motion";
const Projects = () => {
  console.log(projectData)
  return (
    <div id="project" className="text-white mt-16 lg:mt-24 mx-8 lg:mx-28">
      <h1 className="lg:text-center text-3xl lg:text-6xl font-semibold mb-8 lg:mb-12">
        My Project
      </h1>

      
        {projectData.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-12`}
            >
              <div className="w-full md:w-1/2 p-4">
                <a href={project.links.live} target="_blank">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                
                  <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                    {project.name}
                  </h3>

                <p className="text-gray-400 mb-2">{project.description}</p>

                <div className="mb-4 text-gray-400">
                  {project.features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </div>
                <div className="mb-4 text-lg">
                  <span className="font-bold"> Tech: </span> 
                  {
                    project.technologiesUsed.map((tech,index,array)=>{
                      return  <span className="text-purple-500" key={index}> {tech.name}  {index < array.length - 1 ? ', ' : ''} </span>
                      
                    })
                  }
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                  >
                    View Site
                  </a>
                  {project.links.github.frontend && (
                    <a
                      target="_blank"
                      href={project.links.github.frontend}
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                    >
                      Frontend
                    </a>
                  )}
                  {project.links.github.backend && (
                    <a
                      target="_blank"
                      href={project.links.github.backend}
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                    >
                      Backend
                    </a>
                  )}
                  {typeof project.links.github === "string" && (
                    <a
                      target="_blank"
                      href={project.links.github}
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                    >
                      Source Code
                    </a>
                  )}
                </div>
                
                
              </div>
            </motion.div>
          );
        })}
      
    </div>
  );
};

export default Projects;
