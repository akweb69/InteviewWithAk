import React, { useEffect, useState } from 'react';
import { FaCode, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaFire } from 'react-icons/fa';
import { FaWolfPackBattalion } from 'react-icons/fa6';
import TabQuestion from '../Utilities/TabQuestion';

const StartTheJourney = () => {
    const [activeTab, setActiveTab] = useState(0); // Default active tab is the first tab
    const [q1, setQ1] = useState({})
    const [html, setHtml] = useState({})
    const [css, setCss] = useState({})
    const [js, setJs] = useState({})
    const [react, setReact] = useState({})
    const [node, setnode] = useState({})
    const [express, setexpress] = useState({})
    const [mongo, setmongo] = useState({})
    const [fire, setfire] = useState({})
    const [npm, setnpm] = useState({})
    useEffect(() => {
        fetch("q1.json").then(res => res.json()).then(q1 => setQ1(q1))
        fetch("html.json").then(res => res.json()).then(q1 => setHtml(q1))
        fetch("css.json").then(res => res.json()).then(q1 => setCss(q1))
        fetch("js.json").then(res => res.json()).then(q1 => setJs(q1))
        fetch("npm.json").then(res => res.json()).then(q1 => setnpm(q1))
        fetch("fire.json").then(res => res.json()).then(q1 => setfire(q1))
        fetch("mongo.json").then(res => res.json()).then(q1 => setmongo(q1))
        fetch("express.json").then(res => res.json()).then(q1 => setexpress(q1))
        fetch("node.json").then(res => res.json()).then(q1 => setnode(q1))
        fetch("react.json").then(res => res.json()).then(q1 => setReact(q1))
        console.log(q1)
    }, [])


    return (
        <div className="w-11/12 mx-auto pb-10 md:pb-14">
            <h1 className="text-center text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-gradient-to-tr font-ice w-fit mx-auto from-orange-600 to-purple-500 pb-10">Start The Journey</h1>

            {/* Tab Menu */}
            <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-x-6 mb-4 ">
                {/* Basics Tab */}
                <div
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaCode /></span>
                    <span className="hidden sm:block">Basics</span>
                </div>

                {/* HTML Tab */}
                <div
                    onClick={() => setActiveTab(1)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaHtml5 /></span>
                    <span className="hidden sm:block">HTML</span>
                </div>

                {/* CSS Tab */}
                <div
                    onClick={() => setActiveTab(2)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaCss3Alt /></span>
                    <span className="hidden sm:block">CSS</span>
                </div>

                {/* JavaScript Tab */}
                <div
                    onClick={() => setActiveTab(3)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaJsSquare /></span>
                    <span className="hidden sm:block">JavaScript</span>
                </div>

                {/* ReactJS Tab */}
                <div
                    onClick={() => setActiveTab(4)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaReact /></span>
                    <span className="hidden sm:block">ReactJS</span>
                </div>

                {/* NodeJS Tab */}
                <div
                    onClick={() => setActiveTab(5)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 5 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaNodeJs /></span>
                    <span className="hidden sm:block">NodeJS</span>
                </div>

                {/* ExpressJS Tab */}
                <div
                    onClick={() => setActiveTab(6)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 6 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaDatabase /></span>
                    <span className="hidden sm:block">ExpressJS</span>
                </div>

                {/* MongoDB Tab */}
                <div
                    onClick={() => setActiveTab(7)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 7 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaDatabase /></span>
                    <span className="hidden sm:block">MongoDB</span>
                </div>

                {/* Firebase Tab */}
                <div
                    onClick={() => setActiveTab(8)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 8 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaFire /></span>
                    <span className="hidden sm:block">Firebase</span>
                </div>

                {/* NPM Tab */}
                <div
                    onClick={() => setActiveTab(9)}
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
                        ${activeTab === 9 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                        hover:bg-blue-500 hover:text-white mb-2 sm:mb-0`}
                >
                    <span className="mr-2 text-lg"><FaWolfPackBattalion /></span>
                    <span className="hidden sm:block">NPM</span>
                </div>
            </div>

            {/* Tab Content Sections */}
            <div className="p-4 border rounded-lg shadow-lg bg-[rgba(0,0,31,.3)] border-indigo-500 text-gray-300">
                {activeTab === 0 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">Basics <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={q1}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">HTML <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={html}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">CSS <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={css}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 3 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">JavaScript <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={js}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 4 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">ReactJS <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={react}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 5 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">NodeJS <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={node}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 6 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">ExpressJS <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={express}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 7 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">MongoDB <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={mongo}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 8 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">Firebase <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={fire}></TabQuestion>
                        </div>
                    </div>
                )}
                {activeTab === 9 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 ">NPM Package <span className='text-orange-600 font-bold font-fo'>Q</span>-<span>01</span></h2>
                        <div className="">
                            <TabQuestion data={npm}></TabQuestion>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StartTheJourney;
