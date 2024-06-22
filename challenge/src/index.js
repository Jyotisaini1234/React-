import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  const style = {
    height: "30%",
    width: "40%",
    backgroundSize: "cover",
    margin: "auto",
  };
  return (
    <img className="avatar" src="./Aavtar.jpeg" alt="avatar " style={style} />
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Jyoti Saini</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim
        nobis ullam, natus omnis et maiores repellendus minima! Quam tempora quo
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" color="red" />
      <Skill skill="CSS" color="blue" />
      <Skill skill="Java Script" color="yellow" />
      <Skill skill="React" color="skyblue" />
    </div>
  );
}
function Skill(props) {
  return (
    <div
      className="skill"
      style={{
        background: props.color,
        padding: "1.6rem 1rem 0.2rem 1.6rem",
      }}
    >
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
