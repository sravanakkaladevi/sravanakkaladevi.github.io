import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import intrusionIMG from "../../assets/intrusion.jpg";
import crimeIMG from "../../assets/crime.jpg";
import loanIMG from "../../assets/loan.png";
import resultIMG from "../../assets/result.png";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {

  const projects = [
    {
      name: "AI-Based Network Intrusion Detection System",
      details:
        "Machine learning-based intrusion detection system to classify normal and malicious network traffic using Python, pandas, and scikit-learn.",
      github:
        "https://github.com/sravanakkaladevi/AI-Based-Network-Intrusion-Detection-System",
      preview:
        "https://github.com/sravanakkaladevi/AI-Based-Network-Intrusion-Detection-System",
      image: intrusionIMG,
      skills: [
        "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        "https://cdn.worldvectorlogo.com/logos/github-icon.svg"
      ]
    },
    {
      name: "Crime Rate Prediction Using K-Means",
      details:
        "Unsupervised machine learning project using K-Means clustering to analyze and categorize crime data patterns.",
      github:
        "https://github.com/sravanakkaladevi/CRIME-RATE-PREDICTION-ANALYSIS-USING-K-MEANS-CLUSTERING-ALGORITHM-mini-project",
      preview:
        "https://github.com/sravanakkaladevi/CRIME-RATE-PREDICTION-ANALYSIS-USING-K-MEANS-CLUSTERING-ALGORITHM-mini-project",
      image: crimeIMG,
      skills: [
        "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        "https://cdn.worldvectorlogo.com/logos/github-icon.svg"
      ]
    },
    {
      name: "Loan Prediction System",
      details:
        "Machine learning model to automate loan approval prediction using Python, pandas, scikit-learn, and XGBoost.",
      github:
        "https://github.com/sravanakkaladevi/Loan_Prediction_Project",
      preview:
        "https://github.com/sravanakkaladevi/Loan_Prediction_Project",
      image: loanIMG,
      skills: [
        "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        "https://cdn.worldvectorlogo.com/logos/github-icon.svg"
      ]
    },
    {
      name: "Student Result Management System",
      details:
        "Java-based application to manage and display student results using OOP principles and file handling.",
      github:
        "https://github.com/sravanakkaladevi/Student_Result_Manager",
      preview:
        "https://github.com/sravanakkaladevi/Student_Result_Manager",
      image: resultIMG,
      skills: [
        "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        "https://cdn.worldvectorlogo.com/logos/github-icon.svg"
      ]
    }
  ];

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
            transition={{ delay: 0.5, duration: 0.3 }}
            className={styles.projects_component}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                previewLink={project.preview}
                githubLink={project.github}
                projectName={project.name}
                projectDetails={project.details}
                demoImage={project.image}
                skill_img={project.skills}
              />
            ))}
          </motion.div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Projects;
