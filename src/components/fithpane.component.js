import React from "react";
import { InlineWidget } from "react-calendly";

class FirthPane extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FF6B35",
          minHeight: "100vh",
        }}
      >
        <section id="booking">
          <div
            style={{
              overflow: "hidden!important",
              height: "750px",
              marginBottom: "0!important",
            }}
          >
            <InlineWidget url="https://calendly.com/james-back/30min-ext?month=2020-11" />
          </div>
          <h1
            className="text-center"
            style={{
              fontFamily: "Quattrocento",
              fontSize: "72px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            TAKE CONTROL OF
            <br /> YOUR CAREER TODAY.
          </h1>
          <br />
          <br />
          <footer className="footer">
            <div className="container text-right">
              <span
                style={{ color: "black!important" }}
                className="ml-10"
                id="footerlink"
              >
                <a
                  href="https://www.linkedin.com/in/annienxli/"
                  id="footerlink"
                >
                  LINKEDIN
                </a>
                <span style={{ fontSize: "20px" }}>➚</span>
              </span>{" "}
              <span
                style={{ color: "black!important" }}
                className="ml-10"
                id="footerlink"
              >
                {" "}
                <a href="https://twitter.com/annienxli" id="footerlink">
                  TWITTER
                </a>
                <span style={{ fontSize: "20px" }}>➚</span>
              </span>{" "}
              <span
                style={{ color: "black!important" }}
                className="ml-10"
                id="footerlink"
              >
                <a href="mailto:annienxli@outlook.com" id="footerlink">
                  EMAIL
                </a>
                <span style={{ fontSize: "20px" }}>➚</span>
              </span>
            </div>
          </footer>
          <br />
        </section>
      </div>
    );
  }
}

export default FirthPane;
