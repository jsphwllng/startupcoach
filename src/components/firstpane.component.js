import React from "react";
import annie from "./images/annie.png";
import AnchorLink from "react-anchor-link-smooth-scroll";


class FirstPane extends React.Component {
     render() {
    return (
      <div style={{ backgroundColor: "#FF6B35" }}>
        <div
          className="container"
          style={{
            backgroundColor: "#FF6B35",
            minHeight: "80vh",
            width: "100vw",
          }}
        >
          <br />
          <br />
          <br />
          <h3
            className="text-center mt-6"
            style={{
              fontFamily: "Quattrocento",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            JOB COACHING BY ANNIE
          </h3>
          <br />
          <br />
          <div className="row">
            {/* this is the left side */}
            <div className="col-sm mt-8" style={{ margin: "auto" }}>
              <p
                className="text-center"
                style={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                Sent hundreds of applications but never heard back? You need
              </p>
              <h1
                className="text-center"
                style={{
                  fontFamily: "Quattrocento",
                  fontSize: "350%",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                INSIDER KNOWLEDGE
              </h1>
              <div className="text-right">
                <p
                  className="btn btn-dark"
                  style={{
                    fontFamily: "Mukta",
                    fontSize: "15px",
                    backgroundColor: "black",
                  }}
                >
                  <AnchorLink
                    href="#booking"
                    style={{ textDecoration: "none", color: "white!important" }}
                    id="blackbutton"
                  >
                    Book a session
                  </AnchorLink>
                </p>
              </div>
            </div>
            {/* this is the right */}
            <div className="col-6" style={{ margin: "auto" }}>
              <img
                src={annie}
                style={{
                  maxWidth: "100%",
                  boxShadow: "30px -30px 0 0 black",
                  marginLeft: "15%",
                  marginTop: "15%",
                }}
                className="float-left img-fluid pt-10"
                alt="Annie, smiling and wearing a beanie"
              />
            </div>
          </div>
          <br />
          <br />
          <p
            style={{
              fontFamily: "Mukta",
              fontSize: "22px",
              color: "black",
            }}
            class="text-center"
          >
            In summer of 2018, I sent 70-80 job applications but received 0
            <br />
            interviews. I almost got my visa rejected.
            <br />
            <br />
            Today, I’m a startup recruiter dedicated to helping
            <br /> early career professionals land a job in tech.
          </p>
          <br />
          <br />
        </div>
      </div>
    );
}}

export default FirstPane;
