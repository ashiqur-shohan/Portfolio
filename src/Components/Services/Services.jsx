import { motion } from "framer-motion";

const services = [
  {
    s_no: "01",
    s_name: "Django Developer",
    s_desc:
      "I can Develop backend with django. By django-rest-framework i can also make restful api.",
  },
  {
    s_no: "02",
    s_name: "Frontend Developer",
    s_desc:
      "I can make web-site from scratch or from figma file with html, css, javascript, tailwind, bootstrap, daisyUi. I also can make portfolio website by react.",
  },
  {
    s_no: "03",
    s_name: "Backend Developer",
    s_desc:
      "I can make Full-stack web application with django , react, mysql, postgreSql.",
  },
  {
    s_no: "04",
    s_name: "Full-Stack Developer",
    s_desc:
      "I can make Full-stack web application with django , react, mysql, postgreSql.",
  },
];

const Services = () => {
    return (
      <div id="services" className="text-white mt-16 lg:mt-24 mx-8 lg:mx-28">
        <h1 className="text-3xl lg:text-6xl font-semibold lg:text-center mb-8 lg:mb-12">
          Services
        </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 text-center gap-x-16 gap-y-8">
          {/* card-1 */}

          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 "
              >
                <h2 className="text-gray-100 text-2xl font-semibold">
                  {service.s_name}
                </h2>
                {/* <p className="text-gray-300">{service.period}</p> */}
                <p className="text-gray-400 mt-4">{service.s_desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
};

export default Services;