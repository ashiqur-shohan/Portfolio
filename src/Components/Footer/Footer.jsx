

const Footer = () => {
    return (
      <div className="flex flex-col-reverse lg:flex-row gap-2 justify-between mx-8 lg:mx-28 mb-8 pt-8 border-t-2 text-white border-white">
        <h3>© 2024 Ashiqur Rahman Shohan. All rights reserved.</h3>
        <ul className="flex gap-4">
          <li className="cursor-pointer">Term of Services </li>
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Connect with me</li>
        </ul>
      </div>
    );
};

export default Footer;