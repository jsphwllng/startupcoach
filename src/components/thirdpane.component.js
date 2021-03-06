import React from "react";

class ThirdPane extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FF6B35",
          minHeight: "60vh",
          width: "100vw",
        }}
      >
        <div className="container">
          <br />
          <br />
          <br />
          <p style={{ fontFamily: "Inter", fontSize: "15px", color: "black" }}>
            I also spoke at these events and workshops
          </p>
          <div
            className="container ml-3"
            style={{ fontFamily: "Inter", fontSize: "20px", color: "black" }}
          >
            <p>Talking Talent by ACELR8</p>
            <a
              href="https://www.youtube.com/watch?v=KLjZdTxid2M"
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "dashed",
                fontFamily: "Inter",
                fontSize: "20px",
                color: "black",
              }}
            >
              Job Search Strategy by WomenTechMakers
            </a>
            <p className="mt-3">
              Enable Diversity in the Startup Ecosystem by Microsoft for
              Startups
            </p>
            <p>Job Search Strategy by IronHack</p>
            <p>Diversify Tech by PWiC & Scout24</p>
            <p>Career Hacking for Designers by Human Robot</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default ThirdPane;
