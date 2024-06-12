import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="mx-28 mb-8 text-white">
      <h1 className="text-center text-4xl font-semibold mb-8"> Get In Touch</h1>
      <div className="flex gap-8">
        {/* left section */}
        <div className="w-1/2 pr-8">
          <h1>Let's Talk </h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className=" flex flex-col space-y-4">
            <p className="flex gap-4 items-center">
              <img src={call_icon} alt="" /> 01633640145
            </p>

            <p className="flex gap-4 items-center">
              <img src={location_icon} alt="" /> dhaka
            </p>

            <p className="flex gap-4 items-center">
              <img src={mail_icon} alt="" /> ashiqur.shohan@gmail.com
            </p>
          </div>
        </div>
        {/* right section */}
        <div className="w-1/2">
          <p>Your Name</p>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-600 rounded-sm p-2 w-full h-8 mb-4"
          />
          <p>Your Email</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="bg-gray-600 rounded-sm p-2 w-full h-8 mb-4"
          />
          <p>Your Message</p>
          <textarea
            type="text"
            placeholder="Your Message Here."
            className="bg-gray-600 rounded-sm p-2 w-full h-24 mb-4"
          />
          <button className="px-4 py-2 text-lg font-semibold bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white rounded-xl cursor-pointer transition  hover:scale-105">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
