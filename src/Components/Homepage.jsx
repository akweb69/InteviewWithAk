import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import GetStartedButton from "../Utilities/GetStartedButton";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Homepage = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        // Title Animation
        const title = titleRef.current;
        const letters = title.textContent.split("").map((letter) => {
            const span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter; // Preserve spaces
            span.style.display = "inline-block";
            return span;
        });
        title.textContent = "";
        letters.forEach((letter) => title.appendChild(letter));

        // Animate all letters individually
        gsap.fromTo(
            letters,
            {
                opacity: 0,
                y: (i) => (i % 2 === 0 ? -50 : 50), // Alternate directions
                x: (i) => (i % 2 === 0 ? -30 : 30), // Alternate directions
                rotate: (i) => (i % 2 === 0 ? -45 : 45), // Rotate for dynamic effect
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                rotate: 0,
                duration: 1.5,
                stagger: 0.1, // Stagger for each letter
                ease: "power3.out",
            }
        );

        // Animate 2-3 random letters continuously
        const continuousLetters = [letters[2], letters[3], letters[4]]; // Pick specific letters
        gsap.to(continuousLetters, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            stagger: 0.2,
            ease: "power1.inOut",
        });

        // Animate the 'd' in "confidence" continuously
        const confidenceText = "confidence";
        const confidenceIndex = title.textContent.indexOf(confidenceText);

        if (confidenceIndex !== -1) {
            const dIndex = confidenceIndex + confidenceText.indexOf("d"); // Index of 'd'
            const dLetter = letters[dIndex];
            if (dLetter) {
                gsap.to(dLetter, {
                    scale: 1.5,
                    rotation: 360,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        }

        // Subtitle Animation
        const subtitle = subtitleRef.current;
        gsap.fromTo(
            subtitle,
            {
                opacity: 0,
                y: 50, // Start slightly below
            },
            {
                opacity: 1,
                y: 0, // Move to the original position
                duration: 1.5,
                delay: 2, // Start after the title animation
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div className="">
            <div className="min-h-screen w-11/12 mx-auto py-20 " >
                {/* Title Section */}
                <div
                    ref={titleRef}
                    id="title"
                    className="text-5xl text-wrap md:text-8xl font-ice font-bold"
                >
                    Master Web Development Interviews with Confidence
                </div>
                {/* Subtitle Section */}
                <div
                    ref={subtitleRef}
                    className="py-6 text-xl md:text-4xl font-semibold text-gray-600"
                >
                    <ReactTyped strings={["Prepare to ace your web development interviews with InterviewWithAK! Unlock expert insights, master the fundamentals, and dive deep into advanced concepts. Conquer even the toughest interview questions, refine your skills with real-world challenges, and build the confidence you need to secure your dream job effortlessly. With InterviewWithAK, your path to success is clear, comprehensive, and completely free!..."]} typeSpeed={5} />

                </div>
                {/*  */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.67, delay: 5.5 }}
                    className="flex justify-start w-full">
                    <Link to={"/ejp_dash"}> <GetStartedButton></GetStartedButton></Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Homepage;
