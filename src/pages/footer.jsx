
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiFacebook } from "react-icons/fi";

const Footer = () => {

    return (
        <footer className="text-gray-600 body-font bg-gray-800/50">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

                <p className="text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                    © 2025 copyrights all rights reserved.
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
                    <FiGithub className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <FiLinkedin className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <FiMail className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <FiFacebook className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <FiInstagram className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                </span>
            </div>
        </footer>
    );
};

export default Footer;