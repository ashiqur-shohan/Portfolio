import services from '../../assets/services_data'

const Services = () => {
    return (
      <div id="services" className="text-white mt-16 lg:mt-24 mx-8 lg:mx-28">
        <h1 className="text-3xl lg:text-6xl font-semibold lg:text-center mb-8 lg:mb-12">
          Services
        </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* card-1 */}

          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="lg:w-80 border-2 hover:border-purple-500 hover:bg-gradient-to-r  from-[#3f0028] to-[#582300] transition hover:scale-105 rounded-lg pl-3 pr-8 py-4 "
              >
                <h1 className="lg:text-xl mb-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
                  {service.s_no}. {service.s_name}
                </h1>
                <p className="">{service.s_desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Services;