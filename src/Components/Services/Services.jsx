

const Services = () => {
    return (
      <div id="services" className="text-white lg:mt-32 mx-8 lg:mx-28">
        <h1 className="text-3xl lg:text-6xl font-semibold lg:text-center mb-4 lg:mb-16">Services</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* card-1 */}
          <div className="lg:w-80 border-2 hover:border-purple-500 hover:bg-gradient-to-r  from-[#3f0028] to-[#582300] transition hover:scale-105 rounded-lg pl-3 pr-8 py-4 ">
            <h3 className="text-2xl mb-2">01.</h3>
            <h1 className="text-3xl mb-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
              Back-End
            </h1>
            <p className="">
              Back-end development involves server-side logic, databases, and
              APIs to manage data and application functionality.
            </p>
          </div>
          {/* card-1 */}
          <div className="lg:w-80 border-2 hover:border-purple-500 hover:bg-gradient-to-r  from-[#3f0028] to-[#582300] transition hover:scale-105 rounded-lg pl-3 pr-8 py-4 ">
            <h3 className="text-2xl mb-2">02.</h3>
            <h1 className="text-3xl mb-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
              Front-End
            </h1>
            <p className="">
              Back-end development involves server-side logic, databases, and
              APIs to manage data and application functionality.
            </p>
          </div>
          {/* card-1 */}
          <div className="lg:w-80 border-2 hover:border-purple-500 hover:bg-gradient-to-r  from-[#3f0028] to-[#582300] transition hover:scale-105 rounded-lg pl-3 pr-8 py-4 ">
            <h3 className="text-2xl mb-2">03.</h3>
            <h1 className="text-3xl mb-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
              Database-Engeneer
            </h1>
            <p className="">
              Back-end development involves server-side logic, databases, and
              APIs to manage data and application functionality.
            </p>
          </div>
          
        </div>
      </div>
    );
};

export default Services;