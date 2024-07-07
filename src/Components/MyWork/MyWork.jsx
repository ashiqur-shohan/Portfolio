import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="text-white lg:mt-32 mb-8 mx-8 lg:mx-28">
      <h1 className="lg:text-center text-3xl lg:text-6xl font-semibold mb-8 lg:mb-16">
        My Project
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="card h-80   bg-base-100 ">
              <figure>
                <a href={work.live_link} target="_blank">
                  <img src={work.w_img} alt="project image" />
                </a>
              </figure>
              <div className="mt-4">
                <h2 className="lg:text-bold text-sm lg:text-xl text-center">{work.w_name}</h2>
                <div className="lg:ml-4 my-4 ">
                  {work.source ? (
                    <a
                      className="border text-sm hover:border-purple-600 rounded px-2 py-1"
                      href={work.source}
                      target="_blank"
                    >
                      Souce Code
                    </a>
                  ) : (
                    <div className="flex mx-2 flex-wrap gap-4">
                      <a
                        className="border text-sm hover:border-purple-600 rounded px-2 py-1"
                        href={work.frontend_code}
                        target="_blank"
                      >
                        FrontEnd Code
                      </a>
                      <a
                        className="border text-sm hover:border-purple-600 rounded px-2 py-1"
                        href={work.backend_code}
                        target="_blank"
                      >
                        BackEnd Code
                      </a>
                    </div>
                  )}
                  <div className="mt-2 mx-2 flex flex-wrap gap-3">
                    {work.skills.map((skill, index) => (
                      <p
                        key={index}
                        className="border text-sm mt-2 rounded-xl px-2 cursor-default bg-gray-600 text-white"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
