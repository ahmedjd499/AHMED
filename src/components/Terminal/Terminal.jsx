import React, { useRef, useState, useEffect } from "react";
import {
  HelpCommand,
  FactsCommand,
  UnknownCommand,
  LsCommand,
  SshCommand,
  HackerCommand,
  InfoCommand,
} from "./CommandComponents";
import "./Terminal.css";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [showStatic, setShowStatic] = useState(true);
  const inputRef = useRef(null);
  const outputRef = useRef(null); // Ref for the terminal output container
  const outputCounter = useRef(0);
  const { ref, inView } = useInView({
    // triggerOnce: true, // Set to true to trigger only once
    threshold: 0.1, // Adjust this value as needed
  });

  const bounceAnimation = useSpring({
    transform: inView ? 'translateY(0px)' : 'translateY(-50px)', // Bounce effect
    opacity: inView ? 1 : 0, // Fade-in effect
    config: { tension: 200, friction: 12 }, // Adjust tension and friction for bounce
  });
  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    if (trimmedCommand === "clear") {
      setOutput([]);
      setShowStatic(false);
      return;
    }

    const parts = trimmedCommand.split(" ");
    const baseCommand = parts[0];
    const options = parts.slice(1);

    let componentToRender;
    switch (baseCommand) {
      case "ls":
        componentToRender = <LsCommand options={options} />;
        break;
      case "help":
        componentToRender = <HelpCommand />;
        break;
      case "info":
        componentToRender = <InfoCommand />;
        break;
      case "facts":
        componentToRender = <FactsCommand />;
        break;
      case "ssh":
        componentToRender = <SshCommand />;
        break;
      case "hacker":
        componentToRender = <HackerCommand />;
        break;
      default:
        componentToRender = <UnknownCommand command={command} />;
        break;
    }

    outputCounter.current += 1;
    const keyedComponent = React.cloneElement(componentToRender, {
      key: outputCounter.current,
    });

    setOutput((prevOutput) => [...prevOutput, keyedComponent]);
  };

  useEffect(() => {
    // Scroll to the bottom whenever the output updatesclear    
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <animated.div ref={ref} style={bounceAnimation} className="terminal-container bounce-element">
      <div className="recruitment-status">
        <p className="status-label">Recruitment Status</p>
        <div className="status-content">
          <span className="blinking-dot"></span>
          <span className="status-text">Open to work</span>
        </div>
      </div>
      <div className="terminal" onClick={focusInput} ref={outputRef}>
        {showStatic && (
          <>
            <div className="command-output">
              <p className="title">Hello! I'm Ahmed ben Khlifa JD</p>
              <p>Here's some facts about me:</p>
              <p className="facts facts-1">👨🏽‍💻 Software Engineer</p>
              <p className="facts facts-2">🌐 Web Developer</p>
              <p className="facts facts-3"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                style={{ fill: "#d1291a", marginBottom: "-5px" }}>
                <g fill="#2d2ed4" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,12c-6.49219,0 -12.37891,1.35938 -16.72656,3.62891c-4.34766,2.26953 -7.27344,5.53906 -7.27344,9.37109c0,3.83203 2.92578,7.10156 7.27344,9.37109c4.34766,2.26953 10.23437,3.62891 16.72656,3.62891c6.49219,0 12.37891,-1.35937 16.72656,-3.62891c4.34766,-2.26953 7.27344,-5.53906 7.27344,-9.37109c0,-3.83203 -2.92578,-7.10156 -7.27344,-9.37109c-4.34766,-2.26953 -10.23437,-3.62891 -16.72656,-3.62891zM25,14c6.21094,0 11.82422,1.32422 15.80078,3.40234c3.97656,2.07422 6.19922,4.80078 6.19922,7.59766c0,2.79688 -2.22266,5.52344 -6.19922,7.59766c-3.97656,2.07813 -9.58984,3.40234 -15.80078,3.40234c-6.21094,0 -11.82422,-1.32422 -15.80078,-3.40234c-3.97656,-2.07422 -6.19922,-4.80078 -6.19922,-7.59766c0,-2.79687 2.22266,-5.52344 6.19922,-7.59766c3.97656,-2.07812 9.58984,-3.40234 15.80078,-3.40234zM22.50781,16l-2.50781,12h2.625l1.26563,-6h2.09766c0.66797,0 1.11328,0.10938 1.32031,0.33203c0.20313,0.22266 0.24609,0.64453 0.12891,1.25l-0.95703,4.41797h2.66406l1.03906,-4.77734c0.22266,-1.14453 0.05469,-1.98437 -0.5,-2.49609c-0.56641,-0.51953 -1.5625,-0.72656 -3.04687,-0.72656h-2.33984l0.83203,-4zM11,20l-2.02734,11h2.64453l0.52734,-3h1.64844c3.44531,0 5.32031,-0.79687 6.01953,-3.75391c0.60156,-2.54297 -0.9375,-4.24609 -3.48047,-4.24609zM32,20l-2.02734,11h2.64453l0.52734,-3h1.64844c3.44531,0 5.32031,-0.79687 6.01953,-3.75391c0.60156,-2.54297 -0.9375,-4.24609 -3.48047,-4.24609zM13.27344,22h2.05859c1.71094,0 2.07031,0.76953 1.98047,1.625c-0.23047,2.20703 -1.60547,2.375 -3.08203,2.375h-1.71484zM34.27344,22h2.05859c1.71094,0 2.07031,0.76953 1.98047,1.625c-0.23047,2.20703 -1.60547,2.375 -3.08203,2.375h-1.71484z"></path></g></g>
              </svg> Php Developer</p>

              <p className="facts facts-4"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                style={{ fill: "#d1291a" }}>
                <g fill="#2d9146" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(8,8)"><path d="M21.30078,6c-0.157,0 -0.30078,0.12578 -0.30078,0.30078v5.49609l-1.24609,-0.72656c-0.078,-0.046 -0.16591,-0.06836 -0.25391,-0.06836c-0.088,0 -0.17591,0.02236 -0.25391,0.06836l-2.99414,1.74609c-0.156,0.09 -0.25195,0.25655 -0.25195,0.43555v3.49609c0,0.18 0.09595,0.34555 0.25195,0.43555l2.99414,1.74609c0.078,0.046 0.16591,0.06836 0.25391,0.06836c0.088,0 0.17591,-0.02236 0.25391,-0.06836l2.99414,-1.74609c0.156,-0.09 0.25195,-0.25655 0.25195,-0.43555v-1.74805v-1.74805v-6.02148c0,-0.178 -0.09505,-0.34164 -0.24805,-0.43164l-1.30273,-0.75781c-0.049,-0.028 -0.09844,-0.04102 -0.14844,-0.04102zM11.5,11.00195c-0.08775,0 -0.17541,0.02286 -0.25391,0.06836l-2.99414,1.74609c-0.156,0.09 -0.25195,0.25655 -0.25195,0.43555v3.49609c0,0.18 0.09595,0.34555 0.25195,0.43555l2.99414,1.74609c0.157,0.091 0.35081,0.091 0.50781,0l2.99414,-1.74609c0.156,-0.09 0.25195,-0.25655 0.25195,-0.43555v-3.49609c0,-0.18 -0.09595,-0.34555 -0.25195,-0.43555l-2.99414,-1.74609c-0.0785,-0.0455 -0.16616,-0.06836 -0.25391,-0.06836zM27.5,11.00195c-0.088,0 -0.17591,0.02236 -0.25391,0.06836l-2.99414,1.74609c-0.156,0.09 -0.25195,0.25655 -0.25195,0.43555v3.49609c0,0.18 0.09595,0.34555 0.25195,0.43555l2.9043,1.75586c0.156,0.095 0.35177,0.09591 0.50977,0.00391l1.42773,-0.83008c0.148,-0.085 0.149,-0.29972 0,-0.38672l-3.09375,-1.82227v-1.79492l1.5,-0.87305l1.5,0.87305v1.25c0,0.167 0.14037,0.19272 0.23438,0.13672c0.378,-0.222 1.51758,-0.88281 1.51758,-0.88281c0.153,-0.089 0.24805,-0.25364 0.24805,-0.43164v-0.92969c0,-0.18 -0.09595,-0.34555 -0.25195,-0.43555l-2.99414,-1.74609c-0.079,-0.046 -0.16591,-0.06836 -0.25391,-0.06836zM3.5,11.00391c-0.088,0 -0.17591,0.02236 -0.25391,0.06836l-2.99414,1.74414c-0.156,0.091 -0.25195,0.2575 -0.25195,0.4375v4.46289c0,0.218 0.23583,0.35314 0.42383,0.24414l1.32812,-0.77344c0.153,-0.09 0.24805,-0.25364 0.24805,-0.43164v-2.64258l1.5,-0.875l1.5,0.875v2.64258c0,0.178 0.09505,0.34164 0.24805,0.43164l1.32813,0.77344c0.188,0.11 0.42383,-0.02614 0.42383,-0.24414v-4.46289c0,-0.18 -0.09595,-0.3465 -0.25195,-0.4375l-2.99414,-1.74414c-0.078,-0.046 -0.16591,-0.06836 -0.25391,-0.06836zM19.5,13.23633l1.5,0.875v0.88867v0.88867l-1.5,0.875l-1.5,-0.875v-1.77734zM27.5,14.00391l-0.85742,0.5v0.99805l0.85742,0.49805l0.85742,-0.49805v-0.99805zM15.40625,17.99805c-0.10287,0 -0.20688,0.02517 -0.29687,0.07617l-2.8125,1.625c-0.185,0.102 -0.29687,0.30272 -0.29687,0.51172v3.24609c0,0.209 0.11688,0.40572 0.29688,0.51172l0.74023,0.42188c0.355,0.175 0.48549,0.17578 0.64649,0.17578c0.53,0 0.83203,-0.31695 0.83203,-0.87695v-3.20703c0,-0.049 -0.03803,-0.08398 -0.08203,-0.08398h-0.35547c-0.049,0 -0.08398,0.03998 -0.08398,0.08398v3.20703c0,0.243 -0.25678,0.4922 -0.67578,0.2832l-0.76953,-0.44336c-0.025,-0.015 -0.04297,-0.04522 -0.04297,-0.07422v-3.24609c0,-0.029 0.01397,-0.06312 0.04297,-0.07812l2.8125,-1.62109c0.03,-0.015 0.06389,-0.015 0.08789,0l2.81445,1.62109c0.029,0.015 0.04297,0.04412 0.04297,0.07813v3.24609c0,0.034 -0.01897,0.06312 -0.04297,0.07813l-2.81445,1.62695c-0.025,0.015 -0.06389,0.015 -0.08789,0l-0.71875,-0.42773c-0.019,-0.01 -0.04936,-0.01586 -0.06836,-0.00586c-0.199,0.117 -0.23883,0.13231 -0.42383,0.19531c-0.049,0.015 -0.11561,0.04505 0.02539,0.12305l0.93359,0.55469c0.093,0.049 0.19487,0.07813 0.29688,0.07813c0.107,0 0.21097,-0.02903 0.29297,-0.08203l2.8125,-1.62695c0.185,-0.102 0.29688,-0.30272 0.29688,-0.51172v-3.24609c0,-0.209 -0.11688,-0.40472 -0.29687,-0.51172l-2.8125,-1.625c-0.0875,-0.051 -0.19009,-0.07617 -0.29297,-0.07617zM19.79297,19.49609c-0.287,0 -0.53906,0.23206 -0.53906,0.53906c0,0.297 0.24206,0.54102 0.53906,0.54102c0.297,0 0.53906,-0.24402 0.53906,-0.54102c0,-0.307 -0.24706,-0.54406 -0.53906,-0.53906zM19.78711,19.58203c0.254,0 0.45898,0.20012 0.45898,0.45313c0,0.248 -0.20598,0.45298 -0.45898,0.45898c-0.249,0 -0.45117,-0.20598 -0.45117,-0.45898c0,-0.253 0.20317,-0.45312 0.45117,-0.45312zM19.58984,19.72852v0.60742h0.11523v-0.24219h0.10742c0.044,0 0.05445,0.01873 0.06445,0.05273c0,0.005 0.01844,0.16241 0.02344,0.19141h0.125c-0.014,-0.029 -0.0243,-0.11211 -0.0293,-0.16211c-0.014,-0.078 -0.01856,-0.13172 -0.10156,-0.13672c0.044,-0.015 0.11719,-0.03839 0.11719,-0.15039c0,-0.161 -0.13989,-0.16016 -0.21289,-0.16016zM19.70508,19.82617h0.09766c0.03,0 0.08789,-0.00097 0.08789,0.08203c0,0.034 -0.01475,0.08889 -0.09375,0.08789h-0.0918zM16.16016,20.32227c-0.803,0 -1.2793,0.34225 -1.2793,0.90625c0,0.618 0.47709,0.78333 1.24609,0.86133c0.92,0.092 0.99219,0.2243 0.99219,0.4043c0,0.316 -0.25366,0.44727 -0.84766,0.44727c-0.745,0 -0.90889,-0.18469 -0.96289,-0.55469c-0.005,-0.039 -0.03998,-0.06836 -0.08399,-0.06836h-0.36523c-0.044,0 -0.08203,0.03498 -0.08203,0.08398c0,0.472 0.25728,1.03711 1.48828,1.03711c0.903,-0.001 1.41406,-0.35084 1.41406,-0.96484c0,-0.608 -0.40939,-0.76972 -1.27539,-0.88672c-0.876,-0.117 -0.96289,-0.17586 -0.96289,-0.38086c0,-0.17 0.07175,-0.39258 0.71875,-0.39258c0.579,0 0.79481,0.12663 0.88281,0.51563c0.01,0.039 0.03717,0.0625 0.07617,0.0625h0.36523c0.024,0 0.04459,-0.00944 0.05859,-0.02344c0.015,-0.019 0.02453,-0.0385 0.01953,-0.0625c-0.058,-0.672 -0.50134,-0.98437 -1.40234,-0.98437z"></path></g></g>
              </svg> Node Developer</p>
              <p className="facts facts-5"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                style={{ fill: "#d1291a" }}>
                <g fill="#d1291a" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M24.92969,2.00195c-0.10987,0.0005 -0.22067,0.01869 -0.32617,0.05469l-20.93164,7.28516c-0.444,0.154 -0.72206,0.59745 -0.66406,1.06445l3.30859,27.12305c0.039,0.321 0.22867,0.60381 0.51367,0.75781l17.64844,9.5918c0.148,0.081 0.31256,0.12109 0.47656,0.12109c0.165,0 0.33147,-0.04105 0.48047,-0.12305l17.73828,-9.72266c0.282,-0.155 0.47372,-0.43686 0.51172,-0.75586l3.30664,-27.12109c0.058,-0.469 -0.22288,-0.91636 -0.67188,-1.06836l-21.06641,-7.15625c-0.105,-0.035 -0.21434,-0.05128 -0.32422,-0.05078zM25,7l13,28h-4.4375l-2.78125,-5.99219h-11.5625l-2.78125,5.99219h-4.4375zM25,16.5l-3.91992,8.5h7.83984z"></path></g></g>
              </svg> Angular Developer</p>
              <p className="facts facts-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width="20"
                  height="20"
                >
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg> React Developer</p>
            </div>
            <p>Type "help" into the terminal and hit enter to see available commands.</p>
          </>
        )}

        <div className="output" >
          {output}
        </div>

        <div className="input-line">
          <span>$_&gt; </span>
          <input
            type="text"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            autoFocus
          />
        </div>
      </div>
    </animated.div>


  );
};

export default Terminal;
