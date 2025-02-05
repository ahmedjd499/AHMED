// Terminal.jsx
import React, { useRef, useState } from "react";
import {
  HelpCommand,
  FactsCommand,
  ProjectsCommand,
  ContactCommand,
  UnknownCommand,
} from "./CommandComponents";
import "./Terminal.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  // The output will be an array of React elements
  const [output, setOutput] = useState([]);
  const [showStatic, setShowStatic] = useState(true);
  const inputRef = useRef(null);
  const outputCounter = useRef(0);

  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();

    // Special handling for "clear": clear output and hide static content.
    if (trimmedCommand === "clear") {
      setOutput([]);
      setShowStatic(false);
      return;
    }

    let componentToRender = null;
    switch (trimmedCommand) {
      case "help":
        componentToRender = <HelpCommand />;
        break;
      case "facts":
        componentToRender = <FactsCommand />;
        break;
      case "projects":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        componentToRender = <ProjectsCommand />;
        break;
      case "contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        componentToRender = <ContactCommand />;
        break;
      default:
        componentToRender = <UnknownCommand command={command} />;
        break;
    }

    // Generate a unique key for the new output element.
    outputCounter.current += 1;
    const keyedComponent = React.cloneElement(componentToRender, {
      key: outputCounter.current,
    });

    setOutput((prevOutput) => [...prevOutput, keyedComponent]);
  };

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
    <div className="terminal" onClick={focusInput}>
      {/* Render static content only if showStatic is true */}
      {showStatic && (
        <>
          <p className="title">Hello! I'm Ahmed ben Khlifa JD</p>
          <p> Here's some facts about me:</p>
          <p className="web-dev">✔ Web Developer</p>
          <p className="app-dev">✔ App Developer</p>
          <p className="typescript">✔ TypeScript Expert</p>
          <p className="backend">✔ Backend Specialist</p>
          <p className="epos">✔ EPOS Builder</p>
          <p className="football">✔ Football Fanatic ⚽ (forza Biancazzurri!)</p>
          <p>
            Type "help" into the terminal and hit enter to see available commands.
          </p>
        </>
      )}

      {/* Render the command output components */}
      <div className="output">
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
  );
};

export default Terminal;
