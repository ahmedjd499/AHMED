import React from "react";
import "./About.css";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const skillsFront = [
    { name: "React", icon: "react-original-wordmark.svg" },
    { name: "Angular", icon: "angular.svg" },
    { name: "HTML", icon: "html5-original.svg" },
    { name: "CSS", icon: "css3-plain.svg" },
    { name: "JavaScript", icon: "javascript-original.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "Tailwind", icon: "tailwindcss-icon.svg" },
];

const skillsBack = [
    { name: "NodeJS", icon: "nodejs-original-wordmark.svg" },
    { name: "TypeScript", icon: "typescript-original.svg" },
    { name: "Php", icon: "php.svg" },
    { name: "Symfony", icon: "symfony.svg" },
];

const tools = [
    { name: "Vs Code", icon: "vs-code.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "MongoDB", icon: "mongodb-plain.svg" },
    { name: "Postman", icon: "getpostman-icon.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "Git", icon: "git-plain.svg" },
    { name: "Linux", icon: "linux.svg" },
];

const About = () => {
    const { ref: bounceRef, inView: bounceInView } = useInView({
        threshold: 0.1,
    });

    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.1,
    });

    // Bounce Animation for Skills
    const bounceAnimation = useSpring({
        transform: bounceInView ? 'translateY(0px)' : 'translateY(-30px)',
        opacity: bounceInView ? 1 : 0,
        config: { tension: 200, friction: 12 },
    });

    // Fade-in Animation for Text
    const fadeAnimation = useSpring({
        opacity: textInView ? 1 : 0,
        transform: textInView ? 'translateY(0px)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    return (
        <div className="about-container" id="about">
            <animated.h2 ref={textRef} style={fadeAnimation}>About Me</animated.h2>
            <animated.p ref={textRef} style={fadeAnimation}>
                Hello! I'm Ahmed Jaidi, a passionate full-stack web developer from Tunisia,
                dedicated to crafting seamless digital experiences.<br />
                With expertise in frontend technologies like React, Angular, and Bootstrap, and backend frameworks such as Node.js and Symfony,
                I bridge creativity and functionality to build robust, user-centric applications.
            </animated.p>

            <animated.h3 ref={textRef} style={fadeAnimation}>Technologies and Tools</animated.h3>
            <animated.p ref={textRef} style={fadeAnimation}>
                I use cutting-edge technologies and open-source tools to create
                high-performance applications for various platforms.
            </animated.p>

            <animated.h4 ref={textRef} style={fadeAnimation}>Front-end Technologies</animated.h4>
            <animated.div ref={bounceRef} style={bounceAnimation} className="skills-container bounce-element">
                {skillsFront.map((skill) => (
                    <div key={skill.name} className="skill bounce">
                        <img src={`/src/assets/${skill.icon}`} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </animated.div>

            <animated.h4 ref={textRef} style={fadeAnimation}>Back-end Technologies</animated.h4>
            <animated.div ref={bounceRef} style={bounceAnimation} className="skills-container bounce-element">
                {skillsBack.map((skill) => (
                    <div key={skill.name} className="skill bounce">
                        <img src={`/src/assets/${skill.icon}`} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </animated.div>

            <animated.h4 ref={textRef} style={fadeAnimation}>Tools and Utilities</animated.h4>
            <animated.div ref={bounceRef} style={bounceAnimation} className="skills-container bounce-element">
                {tools.map((skill) => (
                    <div key={skill.name} className="skill bounce">
                        <img src={`/src/assets/${skill.icon}`} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </animated.div>
        </div>
    );
};

export default About;
