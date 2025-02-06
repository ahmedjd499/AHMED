// src/components/Terminal.jsx
import './Monitor.css';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
function Monitor() {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Set to true to trigger only once
    threshold: 0.1, // Adjust this value as needed
  });

  const bounceAnimation = useSpring({
    transform: inView ? 'translateX(0px)' : 'translateX(-50px)', // Bounce effect
    opacity: inView ? 1 : 0, // Fade-in effect
    config: { tension: 200, friction: 12 }, // Adjust tension and friction for bounce
  });
  return (
    <animated.div ref={ref} style={bounceAnimation} className=" setuo bounce-element">

      <div className="monitor">
        <div className="screen">
          <div className="content">
            <h1><span className="hello">Hello</span><br></br>There,<br></br>Stranger!</h1>
            <div className="code-window">
              <div className="window-dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="keyword">const</span> <span className="function">greeting</span> = {"() => {"}</div>
                <div className="code-line">&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Let's build together..."</span>;</div>
                <div className="code-line">{"}"}</div>
              </div>
            </div>
            <div className="subtext">Let's build together...</div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Monitor;
