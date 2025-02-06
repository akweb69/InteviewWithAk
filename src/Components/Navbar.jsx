import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Tooltip } from "react-tooltip";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const [menu, setMenu] = useState(true)


    return (
        <div className="w-full bg-[rgba(255,255,255,0.05)]">
            {/* large device */}
            <div className="w-11/12 mx-auto hidden py-4 lg:flex justify-between items-center">
                <Link to={"/"} className="font-ice text-2xl md:text-3xl font-bold">
                    InterviewWithAK
                </Link>
                <div className="flex items-center gap-10">
                    <ul className="flex  items-center">
                        <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/"}>Home</NavLink></li>
                        <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/ejp_dash"}>EJP</NavLink></li>
                        <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/basic"}>Basic</NavLink></li>
                        <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/all-topics"}>All Topics</NavLink></li>
                        <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/tutorials"}>Tutorial</NavLink></li>
                        <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/about"}>About</NavLink></li>
                        <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/premium"}>Premium</NavLink></li>
                    </ul>
                    {/* user photo */}
                    {/* <div id="clickable" className="size-10 rounded-full border border-purple-950">
                        <img src="" className="w-full rounded-full" />
                    </div> */}
                    {/* Tooltip */}
                    {/* <div className="">
                        <Tooltip anchorSelect="#clickable" className="z-50 bg-white shadow-lg rounded-lg p-4 flex flex-col " clickable>
                            <button
                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition text-center border-b text-purple-400 border-b-purple-950"
                            >
                                <span className="w-full mx-auto">Abu Kalam</span>
                            </button>

                            <Link to={"/"}
                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                            >
                                <FaUserCircle size={18} />
                                <span>Profile</span>
                            </Link>
                            <Link to={"/"}
                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                            >
                                <MdOutlinePlaylistAdd size={18} />
                                <span>Add Question</span>
                            </Link>
                            <Link to={"/"}
                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                            >
                                <GrUserAdmin size={18} />
                                <span>Admin Pannel</span>
                            </Link>
                            <Link to={"/"}
                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                            >
                                <FiLogOut size={18} />
                                <span>Logout  </span>
                            </Link>
                        </Tooltip>
                    </div> */}

                    {/* user photo */}
                    {/* btn */}
                    <div className="flex  items-center">
                        <div className=""></div>
                        <div className="flex items-center gap-2">
                            <div className="py-1 px-4 border border-purple-800 rounded-md cursor-pointer hover:bg-purple-600 transition-all duration-200 ">Login</div>
                            <div className="py-1 px-4 border border-purple-800 rounded-md cursor-pointer bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500 transition duration-300">
                                Register
                            </div>
                        </div>
                    </div>
                    {/* btn */}
                </div>
            </div>
            {/* mobile device */}
            <div className="block lg:hidden">
                <div className="w-11/12 py-4 mx-auto flex justify-between items-center">
                    <div className="font-ice text-2xl md:text-3xl font-bold">
                        IWAK
                    </div>
                    <div className="flex gap-3 items-center">
                        <div id="clickable" className="size-10 rounded-full border border-purple-950">
                            <img src="" className="w-full rounded-full" />
                        </div>
                        {/* Tooltip */}
                        <div className="">
                            <Tooltip anchorSelect="#clickable" className="z-50 bg-white shadow-lg rounded-lg p-4 flex flex-col " clickable>
                                <button
                                    className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition text-center border-b text-purple-400 border-b-purple-950"
                                >
                                    <span className="w-full mx-auto">Abu Kalam</span>
                                </button>

                                <Link to={"/"}
                                    className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                >
                                    <FaUserCircle size={18} />
                                    <span>Profile</span>
                                </Link>
                                <Link to={"/"}
                                    className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                >
                                    <MdOutlinePlaylistAdd size={18} />
                                    <span>Add Question</span>
                                </Link>
                                <Link to={"/"}
                                    className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                >
                                    <GrUserAdmin size={18} />
                                    <span>Admin Pannel</span>
                                </Link>
                                <Link to={"/"}
                                    className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                >
                                    <FiLogOut size={18} />
                                    <span>Logout  </span>
                                </Link>
                            </Tooltip>
                        </div>
                        <div onClick={() => setMenu(!menu)} className="text-2xl size-10 rounded-md flex justify-center items-center border border-purple-900 font-bold">
                            {
                                menu ? <GiHamburgerMenu /> : <RxCross2 />
                            }
                        </div>
                    </div>
                </div>
                {
                    !menu && <div className=" py-10 w-full mx-auto bg-[rgb(0,0,44)]">
                        <div className="w-11/12 mx-auto">
                            <div className="">
                                <ul className="flex space-y-4  items-center justify-center flex-col">
                                    <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/"}>Home</NavLink></li>
                                    <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/ejp_dash"}>EJP</NavLink></li>
                                    <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/basic"}>Basic</NavLink></li>
                                    <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/all-topics"}>All Topics</NavLink></li>
                                    <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/tutorials"}>Tutorial</NavLink></li>
                                    <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/about"}>About</NavLink></li>
                                    <li><NavLink className="py-1 px-3 hover:bg-purple-600 rounded-md" to={"/premium"}>Premium</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;