import Navbar from "../../Components/Navbar/Navbar";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.css";

function Skill() {
  return (
    <div>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"My Skills"} />

        <div className={styles.skill_container}>
          <SkillCard skill_name={"kali linux"} level={5} />
          <SkillCard skill_name={"Java (Backend)"} level={4} />
          <SkillCard skill_name={"Python"} level={4} />
          <SkillCard skill_name={"C"} level={4} />
          <SkillCard skill_name={"SQL"} level={4} />
          <SkillCard skill_name={"Git & GitHub"} level={4} />
          <SkillCard skill_name={"VS Code"} level={4} />
          <SkillCard skill_name={"Wireshark"} level={3} />
          <SkillCard skill_name={"Data Structures & Algorithms"} level={4} />
          <SkillCard skill_name={"Operating Systems"} level={4} />
          <SkillCard skill_name={"Object-Oriented Programming"} level={4} />
          <SkillCard skill_name={"DBMS"} level={4} />
          <SkillCard skill_name={"Security & Cybersecurity"} level={3} />
          <SkillCard skill_name={"SDE (Development Focus)"} level={4} />
        </div>
      </MainContainer>
    </div>
  );
}

export default Skill;
