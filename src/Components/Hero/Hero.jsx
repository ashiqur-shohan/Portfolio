import profile from "../../assets/profile.jpg";

const Hero = () => {
  
  return (
    <>
      <div id="home" className="text-white flex flex-col items-center mt-16">
        <img
          src={profile}
          className="w-40 h-40 bg-white rounded-[40px]"
          alt=""
        />
        <h1 className="text-2xl lg:text-5xl lg:w-1/2 my-4 text-center ">
          Hi,I'm{" "}
          <span className="bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
            Ashiqur Rahman Shohan
          </span>
          , Full-Stack Developer.
        </h1>
        <div className="text-lg lg:text-2xl lg:w-1/2 flex gap-4 items-center justify-center">
          <button className="px-4 py-2 border-2 hover:border-purple-500 cursor-pointer text-white rounded-xl">
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1ZZua2rpKhsCvDBx1KTHLZAp4M3BRE7uy&export=download">
              Download Resume
            </a>
          </button>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ashiqur-shohan/"
            >
              <i className="text-4xl text-gray-400 hover:text-[#FC5E2B] cursor-pointer fa-brands fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/ashiqur-shohan">
              <i className="text-4xl text-gray-400 hover:text-[#FC5E2B] cursor-pointer fa-brands fa-square-github"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/ashiqur.shohan">
              <i className="text-4xl text-gray-400 hover:text-[#FC5E2B] cursor-pointer fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
