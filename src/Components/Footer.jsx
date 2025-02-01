import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-[rgb(0,0,37)] w-full text-white py-12">
            <motion.div
                className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Column 1 - Brand Info */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-blue-400">InterviewWithAK</h2>
                    <p className="text-sm opacity-75 mt-2">Empowering Developers for Interviews</p>
                </div>

                {/* Column 2 - Navigation Links */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <h3 className="text-lg font-semibold text-blue-300">Quick Links</h3>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
                </div>

                {/* Column 3 - Social Media Links */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <h3 className="text-lg font-semibold text-blue-300">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400 transition duration-300"><FaFacebookF size={24} /></a>
                        <a href="#" className="hover:text-blue-400 transition duration-300"><FaTwitter size={24} /></a>
                        <a href="#" className="hover:text-blue-400 transition duration-300"><FaLinkedinIn size={24} /></a>
                    </div>
                </div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div
                className="container mx-auto text-center mt-10 px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h3 className="text-xl font-semibold text-blue-300">Subscribe to Our Newsletter</h3>
                <p className="text-sm opacity-75 mt-2">Get the latest updates and interview tips straight to your inbox.</p>
                <form className="mt-4 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-l-md text-black focus:outline-none w-2/3 md:w-1/3"
                    />
                    <button className="bg-blue-500 px-6 py-2 rounded-r-md hover:bg-blue-600 transition duration-300 font-medium">Subscribe</button>
                </form>
            </motion.div>

            {/* Copyright Section */}
            <div className="text-sm opacity-75 text-center mt-8 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} InterviewWithAK. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
