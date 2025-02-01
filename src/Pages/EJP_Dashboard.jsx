import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const EJP_Dashboard = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-tr py-4 from-[rgb(0,0,31)] to-indigo-950">
            <div className="w-11/12 mx-auto">
                {/* navlinks */}
                <div className="mb-6">
                    <ul className="w-full flex justify-center space-x-4 bg-indigo-900 p-3 rounded-lg shadow-lg">
                        {['Day-01', 'Day-02', 'Day-03', 'Day-04', 'Day-05', 'Day-06'].map((day, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
                            >
                                <Link to={`/ejp_dash/${day}`}>{day}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                {/* outlet */}

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default EJP_Dashboard;