// src/components/Terminal.jsx
import './Monitor.css';

function Monitor({ handleCommand }) {

  return (
    <div className="setup">
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
    </div>
  );
}

export default Monitor;
