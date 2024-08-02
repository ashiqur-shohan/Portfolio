import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import React from "react";
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "edb56bf0-2950-490d-bbcf-c7a39b86ee76");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id="contact" className="mx-8 lg:mx-28  text-white mt-16 lg:mt-24">
      <h1 className="lg:text-center text-3xl lg:text-6xl font-semibold mb-8 lg:mb-12">
        Get In Touch
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* left section */}
        <div className="lg:w-1/2 pr-8">
          <h1>Let's Talk </h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className=" flex flex-col mt-4 space-y-4">
            <p className="flex gap-4 items-center">
              <img src={call_icon} alt="" /> 01633640145
            </p>

            <p className="flex gap-4 items-center">
              <img src={location_icon} alt="" /> Dhaka, Bangladesh
            </p>

            <p className="flex gap-4 items-center">
              <img src={mail_icon} alt="" /> ashiqur.shohan@gmail.com
            </p>
          </div>
        </div>
        {/* right section */}
        <form onSubmit={onSubmit} className="lg:w-1/2">
          <h2 className="text-center text-xl font-bold border-b border-orange-400 lg:mx-40 mb-4">Email Me</h2>
          {/* <label>Your Name</label> */}
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-600 rounded-sm p-2 w-full h-8 mb-4"
            name="name"
          />
          {/* <label>Your Email</label> */}
          <input
            type="email"
            placeholder="example@gmail.com"
            className="bg-gray-600 rounded-sm p-2 w-full h-8 mb-4"
            name="email"
          />
          {/* <label>Your Message</label> */}
          <textarea
            type="text"
            placeholder="Your Message Here."
            className="bg-gray-600 rounded-sm p-2 w-full h-24 mb-4"
            name="text"
          />
          <button
            type="submit"
            className="px-4 py-2 text-lg font-semibold bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white rounded-xl cursor-pointer transition  hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
