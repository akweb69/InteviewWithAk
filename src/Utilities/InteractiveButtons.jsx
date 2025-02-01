import React from "react";
import { motion } from "framer-motion";
import { FaBeer, FaHeart, FaStar, FaRocket, FaHome, FaBell, FaCheck, FaArrowRight, FaSmile, FaPlay, FaPause, FaTrash, FaEdit, FaSearch, FaCloud } from "react-icons/fa";

const InteractiveButtons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8">
      {/* button-1 */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl"
      >
        <FaBeer className="mr-2 text-lg" /> Button 1
      </motion.div>
      {/* button-2 */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:shadow-2xl"
      >
        <FaHeart className="mr-2 text-lg" /> Button 2
      </motion.div>
      {/* button-3 */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-gradient-to-r from-green-400 to-blue-500 text-white hover:shadow-2xl"
      >
        <FaStar className="mr-2 text-lg" /> Button 3
      </motion.div>
      {/* button-4 */}
      <motion.div
        whileHover={{ scale: 1.1, backgroundColor: "#facc15" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-yellow-400 text-white"
      >
        <FaRocket className="mr-2 text-lg" /> Button 4
      </motion.div>
      {/* button-5 */}
      <motion.div
        whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-purple-500 text-white"
      >
        <FaHome className="mr-2 text-lg" /> Button 5
      </motion.div>
      {/* button-6 */}
      <motion.div
        whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-pink-500 text-white"
      >
        <FaBell className="mr-2 text-lg" /> Button 6
      </motion.div>
      {/* button-7 */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px 5px rgba(128, 128, 255, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-gradient-to-r from-indigo-500 to-teal-500 text-white"
      >
        <FaCheck className="mr-2 text-lg" /> Button 7
      </motion.div>
      {/* button-8 */}
      <motion.div
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ffffff" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-teal-500 text-white"
      >
        <FaArrowRight className="mr-2 text-lg" /> Button 8
      </motion.div>
      {/* button-9 */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-gray-700 text-white"
      >
        <FaSmile className="mr-2 text-lg" /> Button 9
      </motion.div>
      {/* button-10 */}
      <motion.div
        whileHover={{ scale: 1.1, backgroundColor: "#FF5733" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-orange-500 text-white"
      >
        <FaPlay className="mr-2 text-lg" /> Button 10
      </motion.div>
      {/* button-11 */}
      <motion.div
        whileHover={{ scale: 1.1, borderColor: "#00f" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
      >
        <FaPause className="mr-2 text-lg" /> Button 11
      </motion.div>
      {/* button-12 */}
      <motion.div
        whileHover={{ scale: 1.1, opacity: 0.85 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      >
        <FaTrash className="mr-2 text-lg" /> Button 12
      </motion.div>
      {/* button-13 */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px 5px rgba(0, 255, 0, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
      >
        <FaEdit className="mr-2 text-lg" /> Button 13
      </motion.div>
      {/* button-14 */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px 5px rgba(255, 255, 0, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
      >
        <FaSearch className="mr-2 text-lg" /> Button 14
      </motion.div>
      {/* button-15 */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px 3px rgba(0, 0, 255, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all bg-gradient-to-r from-blue-500 to-green-500 text-white"
      >
        <FaCloud className="mr-2 text-lg" /> Button 15
      </motion.div>
    </div>
  );
};

export default InteractiveButtons;
