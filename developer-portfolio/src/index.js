import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(){
    return <div>
        <img src="/image/photo.jpg"  className="avatar"/>

    </div>
}
function Intro(){
    return <div>
        <h1>Rahul Vishwakarma</h1>
        <p className="data">
        I specialize in DevOps. My expertise encompasses a range of technologies and practices.
        </p>
    </div>
}

function SkillList(){
    return <div className="skill-list">
        <Skill skill="HTML+CSS" emoji="💪" style={{backgroundColor: " #c54c82"}}/>
        <Skill skill="JavaScript" emoji="💪" style={{backgroundColor: "#4c9173"}}/>
        <Skill skill="Web Design" emoji="💪" style={{backgroundColor: "#f57b51"}}/>
        <Skill skill="Git and Github" emoji="👍" style={{backgroundColor: "#f1b963"}}/>
        <Skill skill="React" emoji="💪" style={{backgroundColor: "#00aaa0"}}/>
        <Skill skill="Docker" emoji="👍" style={{backgroundColor: "#e46161"}}/>

    </div>
}
function Skill(props){
    return <div className="skill" style={props.style}>{props.skill}{props.emoji} </div>
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
