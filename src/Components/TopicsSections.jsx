import React from 'react';
import Slider from 'react-slick';
import { ReactTyped } from 'react-typed';
import TopicsCard from '../Utilities/TopicsCard';
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";

const TopicsSections = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]

    };
    return (
        <div className='w-full py-10 md:py-14  bg-gradient-to-b from-[rgb(0,0,31)] via-[rgb(0,0,44)] to-[rgb(0,0,31)] '>
            <div className="w-10/12 md:w-11/12 mx-auto">
                <h1 className="text-center text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-gradient-to-tr font-ice w-fit mx-auto from-orange-600 to-purple-500">We Cover <ReactTyped strings={["ANITHING!", "HTML", "CSS", "JAVASCRIPT", 'REACTJS', 'NODEJS', 'EXPRESSJS', 'MONGODB', 'FIREBASE', 'CSS FRAMEWORK', 'NPM PACKAGES', 'ANGULARJS']} typeSpeed={80} backSpeed={30} loop /> </h1>

                <div className="py-10 slider-container">

                    <Slider {...settings}>
                        <TopicsCard title={"HTML"} desc={"HTML is a markup language that structures and organizes webpage content using semantic tags, enabling static layouts, hypertext linking, and embedding multimedia with additional attributes for clarity and functionality."} icon={<TiHtml5 className='text-orange-500 text-[50px] md:text-[100px]'></TiHtml5>}></TopicsCard>

                        <TopicsCard desc={"CSS is a styling language that enhances the visual appearance of web pages by controlling layout, colors, fonts, animations, and ensuring responsiveness through flexible design techniques like grid and flexbox."} title={"CSS"} icon={<FaCss3Alt className='text-indigo-500 text-[50px] md:text-[100px]'></FaCss3Alt>}></TopicsCard>

                        <TopicsCard desc={"JavaScript is a dynamic programming language that adds interactivity, logic, and functionality to web pages by manipulating the DOM, handling events, and enabling asynchronous operations for responsive user experiences."} title={"JavaScript"} icon={<IoLogoJavascript className='text-purple-500 text-[50px] md:text-[100px]'></IoLogoJavascript>}></TopicsCard>

                        <TopicsCard desc={"React is a JavaScript library for building user interfaces, using components, JSX, and state management to create efficient, interactive, and dynamic web applications with a virtual DOM for enhanced performance."} title={"ReactJs"} icon={<FaReact className='text-blue-500 text-[50px] md:text-[100px]'></FaReact>}></TopicsCard>

                        <TopicsCard desc={"Angular is a TypeScript-based framework for building dynamic, single-page web applications, utilizing components, two-way data binding, dependency injection, and a modular architecture to enhance scalability and maintainability."} title={"AngularJs"} icon={<FaAngular className='text-pink-500 text-[50px] md:text-[100px]'></FaAngular>}></TopicsCard>

                        <TopicsCard desc={"Vue is a progressive JavaScript framework for building user interfaces, utilizing reactive data binding, components, and an incremental adoption model to create fast, flexible, and maintainable web applications."} title={"VueJs"} icon={<FaVuejs className='text-green-400 text-[50px] md:text-[100px]'></FaVuejs>}></TopicsCard>

                        <TopicsCard desc={"Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing developers to build server-side applications with non-blocking, event-driven architecture for scalable and high-performance applications."} title={"NodeJs"} icon={<RiNodejsLine className='text-teal-600 text-[50px] md:text-[100px]'></RiNodejsLine>}></TopicsCard>

                        <TopicsCard desc={"MongoDB is a NoSQL database that stores data in JSON-like documents with dynamic schemas, offering scalability, flexibility, and fast query performance for handling large volumes of unstructured data."} title={"MongoDB"} icon={<SiMongodb className='text-green-500 text-[50px] md:text-[100px]'></SiMongodb>}></TopicsCard>

                        <TopicsCard desc={"Firebase is a backend-as-a-service (BaaS) platform offering a variety of tools and services, including real-time databases, authentication, cloud storage, and analytics, designed to help developers build, manage, and scale web and mobile applications."} title={"FireBase"} icon={<RiFirebaseFill className='text-yellow-500 text-[50px] md:text-[100px]'></RiFirebaseFill>}></TopicsCard>


                    </Slider>

                </div>

            </div>
        </div>
    );
};

export default TopicsSections;