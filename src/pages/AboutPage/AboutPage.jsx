import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import resultIMG from "../../assets/result.png";
import loanIMG from "../../assets/loan.png";
// ❌ Removed internIMG import since you're not using local file

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About Me"} />

          {/* === Education Section === */}
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2019 - 2020"}
                  timeline_title={"Intermediate (MPC)"}
                  location={"Sri Chaitanya Junior College, Hyderabad"}
                  details={"Completed Intermediate in MPC stream under Telangana State Board."}
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2021 - 2024"}
                  timeline_title={"B.Com (Computer Applications)"}
                  location={"Sphoorthy Degree & PG College, Hyderabad"}
                  details={"Graduated under Osmania University with 7.52 CGPA."}
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2024 - 2026 (Expected)"}
                  timeline_title={"MCA (Master of Computer Applications)"}
                  location={"Aurora's PG College, Hyderabad"}
                  details={"Currently pursuing MCA under Osmania University."}
                />
              </div>
            </div>
          </div>

          {/* === Experience / Projects Section === */}
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience & Projects</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"Apr 2025 – May 2025"}
                  timeline_title={"Foundations of AI Internship (Stipend)"}
                  location={"Microsoft | Edunet Foundation (AICTE), Remote"}
                  details={
                    "Completed a 4-week stipend-based virtual internship focused on AI. Built a Loan Prediction System using Python, pandas, scikit-learn, and xgboost."
                  }
                  img={loanIMG}
                />
              </div>

              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2024"}
                  timeline_title={"Student Result Management System"}
                  location={"Java Project"}
                  details={
                    "Developed a Java application to input, store, and display student results using file handling and OOP concepts."
                  }
                  img={resultIMG}
                />
              </div>

              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"Currently Seeking"}
                  timeline_title={"Internship Opportunity"}
                  location={"Open to Remote/Hybrid"}
                  details={
                    "Actively looking for real-world internship opportunities (preferably stipend-based) to enhance development and cybersecurity skills."
                  }
                  img={"https://cdn-icons-png.flaticon.com/512/10449/10449862.png"} // ✅ using online image
                />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
