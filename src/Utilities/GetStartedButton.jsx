import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const GetStartedButton = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95, y: 2 }}
            className="flex justify-center items-center"
        >
            <button
                className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300 ease-in-out transform"
            >
                <span className="font-semibold text-lg">Get Started</span>
                <FaArrowRight className="ml-2 text-lg" />
            </button>
        </motion.div>
    );
};

export default GetStartedButton;
