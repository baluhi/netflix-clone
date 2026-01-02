import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container text-center ">
        <p>© {new Date().getFullYear()} My Company. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-white-50 mx-2">Privacy Policy</a>
          |
          <a href="/terms-of-service" className="text-white-50 mx-2">Terms of Service</a>
        </p>
        <p>
          <a href="https://facebook.com" className="text-white mx-2">
          <FaFacebook/>
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
         <FaTwitter/>
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
          <FaInstagram/>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
