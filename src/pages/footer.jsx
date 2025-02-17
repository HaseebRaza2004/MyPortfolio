
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiFacebook } from "react-icons/fi";

const Footer = () => {

    return (
        <footer className="text-gray-600 body-font bg-gray-800/50">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

                <p className="text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                    © 2025 copyrights all rights reserved.
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
                    <a href="https://github.com/HaseebRaza2004"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>

                    <a href="https://www.linkedin.com/in/muhammad-haseeb-raza-6a6b0333b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>

                    <a href="mailto:haseebraza2004@gmail.com?subject=Inquiry%20from%20My%20Website&body=Hello,%20I'd%20like%20to..."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiMail className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>

                    <a href="https://www.facebook.com/share/1EbmQwEbpn/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiFacebook className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>

                    <a href="https://www.instagram.com/haseeb_raza01?igsh=MTg0Z2xjM3c3cmprNA=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiInstagram className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;