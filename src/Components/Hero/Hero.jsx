import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
const Hero = () => {
  // return (
  //   <>
  //     <div
  //       id="home"
  //       className="text-white flex flex-col mx-8 lg:mx-28 items-center mt-16"
  //     >
  //       <img
  //         src={profile}
  //         className="w-40 h-40 bg-white rounded-[40px]"
  //         alt=""
  //       />
  //       <h1 className="text-2xl lg:text-5xl lg:w-1/2 my-4 text-center ">
  //         Hi,I'm{" "}
  //         <span className="bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
  //           Ashiqur Rahman Shohan
  //         </span>

  //         , Full-Stack Developer.
  //       </h1>
  //       <div className="text-lg lg:text-2xl lg:w-1/2 flex gap-4 items-center justify-center">
  //         <button className="px-4 py-2 border-2 hover:border-purple-500 cursor-pointer text-white rounded-xl">
  //           <a href="https://drive.usercontent.google.com/u/0/uc?id=1ZZua2rpKhsCvDBx1KTHLZAp4M3BRE7uy&export=download">
  //             Download Resume
  //           </a>
  //         </button>
  //         <div className="flex gap-4">
  //           <a
  //             target="_blank"
  //             href="https://www.linkedin.com/in/ashiqur-shohan/"
  //           >
  //             <i className="text-4xl text-gray-400 hover:text-[#FC5E2B] cursor-pointer fa-brands fa-linkedin"></i>
  //           </a>
  //           <a target="_blank" href="https://github.com/ashiqur-shohan">
  //             <i className="text-4xl text-gray-400 hover:text-[#FC5E2B] cursor-pointer fa-brands fa-square-github"></i>
  //           </a>
  //           <a target="_blank" href="https://www.facebook.com/ashiqur.shohan">
  //             <i className="text-4xl text-gray-400 hover:text-[#FC5E2B] cursor-pointer fa-brands fa-square-facebook"></i>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div
        id="home"
        className="mx-8 flex flex-col justify-between items-center gap-8 lg:flex-row lg:mx-28 mt-8 h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Dev",
              1000,
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
              "Python Dev",
              1000,
              "Django Dev",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl lg:text-3xl italic"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg lg:text-2xl "
          >
            Hey, I am <br />
            <span className="text-purple-500 text-3xl lg:text-4xl">
              {" "}
              Ashiqur Rahman Shohan{" "}
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg lg:text-lg mt-2 lg:mb-4 "
          >
            I am passionate developer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.15 }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="border border-purple-400 rounded-lg p-4 mt-2"
            >
              <a href="https://drive.usercontent.google.com/u/0/uc?id=1ZZua2rpKhsCvDBx1KTHLZAp4M3BRE7uy&export=download">
                Download resume
              </a>
            </motion.button>
            <motion.div className="text-4xl lg:text-5xl flex items-center">
              <motion.a
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                href="https://github.com/ashiqur-shohan"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/ashiqur-shohan/"
                target="_blank"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/ashiqur.shohan"
              >
                <AiOutlineFacebook />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                href="https://leetcode.com/u/ashiqur_shohan/"
              >
                <SiLeetcode />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.img
          src={profile}
          className="w-[300px] md:w-[350px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />
      </div>
    </>
  );
};

export default Hero;
