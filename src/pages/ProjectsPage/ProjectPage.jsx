import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import loanIMG from "../../assets/loan.png";
import resultIMG from "../../assets/result.png";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My Projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://github.com/sravanakkaladevi/Loan_Prediction_Project"}
              githubLink={"https://github.com/sravanakkaladevi/Loan_Prediction_Project"}
              projectName={"Loan Prediction System"}
              projectDetails={
                "Developed a machine learning model to automate loan approval based on applicant data using Python, pandas, scikit-learn, and XGBoost."
              }
              demoImage={loanIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/python-5.svg",
                "https://cdn.worldvectorlogo.com/logos/github-icon.svg"
              ]}
            />

            <ProjectCard
              previewLink={"https://github.com/sravanakkaladevi/Student_Result_Manager"}
              githubLink={"https://github.com/sravanakkaladevi/Student_Result_Manager"}
              projectName={"Student Result Management System"}
              projectDetails={
                "Java-based application to manage and display student results using OOPs and file handling."
              }
              demoImage={resultIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/java-14.svg",
                "https://cdn.worldvectorlogo.com/logos/github-icon.svg"
              ]}
            />
          </motion.div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Projects;
