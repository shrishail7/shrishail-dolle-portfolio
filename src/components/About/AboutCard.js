import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shrishail Dolle </span>
            from <span className="purple"> Solapur , India.</span>

            <ul>

                <li>
                 I am Final Year Student @ Veermata Jijabai Technological Instiute , Mumbai.
                </li>

                <br/>

                <li>
                I have completed HSC in Science at Sangmeshwar Colle,Solapur.
                </li>
                  
                <br/>

                <li>
                I have completed my SSC from Mangrule High School, Akkalkot.
                </li>

            </ul>
           
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket , Vollyball.
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Think out off the box and try to execute it with full strength!"{" "}
          </p>
          <footer className="blockquote-footer">Shree</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
