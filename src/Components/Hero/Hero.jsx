import profile from "../../assets/profile.jpg";
const Hero = () => {
  return (
    <>
      <div id="home" className="text-white flex flex-col items-center mb-20">
        <img src={profile} className="w-40 h-40 bg-white rounded-[40px]" alt="" />
        <h1 className="text-5xl w-1/2 mb-4 text-center ">
          <span className="bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
            I'm Ashiqur Rahman Shohan
          </span>
          , Full-Stack Developer.
        </h1>
        <div className="text-2xl w-1/2 flex gap-4 items-center justify-center">
          <button className="px-4 py-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white rounded-xl cursor-pointer transition  hover:scale-105">
            Connect with me
          </button>
          <button className="px-12 py-2 border-2 hover:border-purple-500 cursor-pointer text-white rounded-xl">
            My Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
