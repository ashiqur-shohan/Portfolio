import skills from "../../assets/skills.js";

const TechStack = () => {
  return (
    <div id="tech" className="text-white mt-16 lg:mt-24 mx-8 lg:mx-28">
      <h1 className="lg:text-center text-3xl lg:text-6xl font-semibold mb-8 lg:mb-12">
        Tech Stack
      </h1>
      <div className="grid grid-cols-3 lg:flex lg:flex-wrap gap-4 lg:gap-16 text-center">
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
      </div>
    </div>
  );
};

export default TechStack;
