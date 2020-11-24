import React from "react";
import chatting from "./images/chatting.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

class SecondPane extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F1E8B8",
          minHeight: "70vh",
        }}
      >
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col">
              <h1
                className="text-center"
                style={{
                  fontFamily: "Quattrocento",
                  fontSize: "45px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                JOB COACHING
              </h1>
            </div>
            <div className="col text-center">
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
        </div>
        {/* the weird line things */}
        <br />
        <br />
        <div
          style={{
            display: "inline-block",
            border: "4px solid #FF6B35",
            width: "20%",
          }}
        ></div>
        <p
          style={{
            display: "inline",
            verticalAlign: "top",
            fontFamily: "Mukta",
            fontSize: "18px",
            marginLeft: "2%",
          }}
        >
          45 mins of 1-on-1 coaching
        </p>
        <br />
        <br />
        <div
          style={{
            display: "inline-block",
            border: "4px solid #FFE031",
            width: "22%",
          }}
        ></div>
        <p
          style={{
            display: "inline",
            verticalAlign: "top",
            fontFamily: "Mukta",
            fontSize: "18px",
            marginLeft: "2%",
          }}
        >
          create your personal job search strategy
        </p>
        <br />
        <br />
        <div
          style={{
            display: "inline-block",
            border: "4px solid #1D262D",
            width: "24%",
          }}
        ></div>
        <p
          style={{
            display: "inline",
            verticalAlign: "top",
            fontFamily: "Mukta",
            fontSize: "18px",
            marginLeft: "2%",
          }}
        >
          {" "}
          tested tools & templates
        </p>
        <br />
        <br />
        <div
          style={{
            display: "inline-block",
            border: "4px solid #70877F",
            width: "26%",
          }}
        ></div>
        <p
          style={{
            display: "inline",
            verticalAlign: "top",
            fontFamily: "Mukta",
            fontSize: "20px",
            marginLeft: "2%",
          }}
        >
          {" "}
          join an exclusive coachee community
        </p>
        <br />
        <br />

        <img
          src={chatting}
          style={{ maxWidth: "100vw", marginTop: "60px" }}
          alt="Annie, chatting at a small confrence regarding recruitment in UX/UI"
        />
      </div>
    );
  }
}

export default SecondPane;
