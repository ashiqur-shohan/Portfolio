import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="text-white lg:mt-32 mx-8 lg:mx-28 lg:text-center">
      <h1 className="text-3xl lg:text-6xl font-semibold text-left lg:text-center mb-4 lg:mb-16 text-white">
        About
      </h1>
      <div className="flex lg:items-center text-left lg:justify-center lg:gap-12">
        <div className="">
          <img src={profile} alt="" className="w-60 h-60 hidden" />
        </div>
        <div className="lg:w-2/3 lg:px-8 flex items-center">
          <p>
            I am ashiqur rahman shohan. Currently, Undergradate student at
            University of chiitagong. My Honours Subject is Statistics. I am
            very much enthusiastic about technoloygy.
          </p>
        </div>
      </div>
      <div className="flex w-full lg:place-content-around my-12 lg:my-16 ">
        <div className="w-1/3 border-r-2 text-center transition  hover:scale-105">
          <h1 className="text-2xl lg:text-5xl">10+</h1>
          <p className="text-md lg:text-xl">Experience</p>
        </div>
        <hr />
        <div className="w-1/3 border-r-2 text-center transition  hover:scale-105">
          <h1 className="text-2xl lg:text-5xl">3</h1>
          <p className="text-md lg:text-xl">Projects </p>
        </div>
        <hr />
        <div className="w-1/3 text-center transition  hover:scale-105">
          <h1 className="text-2xl lg:text-5xl">2+</h1>
          <p className="text-md lg:text-xl">Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
