import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import resume from "../assets/resume.pdf"; // Importing the file directly

function Navbar() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <nav className="flex items-center justify-between py-2 ">
      <div className="flex text-3xl flex-shrink-0 items-center">
        <h1 className="font-extrabold">AR</h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <button
          className=" px-3 py-1 text-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-md shadow-md hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out"
          onClick={handleDownload}
        >
          Resume
        </button>

        <a href="https://github.com/abdulrahman-mm" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abdulrahman124/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailto:www.abdulrahman.mm124@gmail.com" target="_blank">
          <CgMail />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
