import logo from "../assets/Noble-Chowdhury-Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6">
      <div className="flex-shrink-0 items-center">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mx-5 w-40 lg:mx-20 lg:w-60"
          src={logo}
          alt="logo"
        />
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="m-4 flex items-center justify-center gap-4 text-xl lg:m-8 lg:text-2xl"
      >
        <a href="https://www.linkedin.com/in/rony-chowdhury-8587501ba/" target="_blank" rel="noopener noreferrer" className="icon-hover">
          <FaLinkedin />
        </a>
        <a href="https://github.com/itssron" target="_blank" rel="noopener noreferrer" className="icon-hover">
          <FaGithub />
        </a>
      </motion.div>
    </nav>
  );
}

export default Navbar;
