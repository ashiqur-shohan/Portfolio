import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="text-white mx-28">
      <h1 className="text-4xl font-semibold text-center mb-8 text-white">About</h1>
      <div className="flex gap-12">
        <div>
          <img src={profile} alt="" />
        </div>
        <div className="w-2/3 px-8 flex items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            perferendis eligendi quis pariatur dignissimos molestias ea labore
            unde distinctio quae adipisci quos nobis libero enim aliquid,
            provident odit impedit hic maxime rem. Iure inventore ipsam
            voluptatum amet suscipit. <br />
            Eum facilis eos nobis eaque voluptatem asperiores vitae, quidem
            dolore nostrum suscipit?
          </p>
        </div>
      </div>
      <div className="flex w-full place-content-around my-16 ">
        <div className="w-1/3 border-r-2 text-center transition  hover:scale-105">
          <h1 className="text-5xl">10+</h1>
          <p className="text-xl">Experience</p>
        </div>
        <hr />
        <div className="w-1/3 border-r-2 text-center transition  hover:scale-105">
          <h1 className="text-5xl ">3</h1>
          <p className="text-xl">Projects Completed</p>
        </div>
        <hr />
        <div className="w-1/3 text-center transition  hover:scale-105">
          <h1 className="text-5xl">2+</h1>
          <p className="text-xl">Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
