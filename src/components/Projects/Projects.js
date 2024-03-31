import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}   // image of project
              isBlog={false}
              title="Eduxpert"     // title of project
              description="This app will be useful for both students and teachers out there.They will have to fill their data such as name,education,specialization,fees,time and mode of teaching/learning(online/offline) etc. Website will find the matches and suggest them to each other.."
              ghLink="https://github.com/shrishail7/Eduxpert"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>


           {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hostel Management Application"
              description="The Hostel Management Website is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It is designed to manage a hostel's operations, such as adding new students and updating daily attendance. The website provides an admin interface for managing hostel-related tasks, while users (outsiders) can view the information."
              ghLink="https://github.com/shrishail7/Hostel-management-website"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MyHealthMate"
              description="MyHealthMate is a personal medical tracker that lets users manage their well-being online by helping them record and monitor their health particulars. The vision behind this app is to empower everyone with full control over their medical data."
              ghLink="https://github.com/shrishail7/MyHealthMate"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fire and Smoke Alarm"
              description="Fire Alarm System is designed to alert us to an emergency so that we can take action to protect ourselves from fire or gas leakages."
              ghLink="https://github.com/shrishail7/Fire-and-Smoke-Alarm-System"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
