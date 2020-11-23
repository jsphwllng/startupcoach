import React from "react";
import fanyi from "./images/fanyi.png";
import joseph from "./images/joseph.png";
import jeremy from "./images/jeremy.png";

class FourthPane extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F1E8B8",
          minHeight: "60vh",
        }}
      >
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col text-center">
            <img
              src={jeremy}
              style={{ maxWidth: "50%" }}
              className="img-fluid pt-10"
              alt="A stylised drawing of Jeremy wearing a big hat and smiling"
            />{" "}
            <div
              style={{
                backgroundColor: "#FFE031",
                color: "black",
                width: "30%",
                display: "inline-block",
                ontFamily: "Inter",
                fontSize: "15px",
                boxShadow: "-10px 10px 0 0 black",
              }}
            >
              "Am I the guy who wrote the cool CV? I'm not sure anyway Annie is
              good!"
            </div>
            <p>Jeremy, Product Marketing Manager</p>
          </div>
          <div className="col text-center">
            <img
              src={fanyi}
              style={{ maxWidth: "50%" }}
              className="img-fluid pt-10"
              alt="A stylised drawing of Jeremy wearing a lightning bolt t-shirt"
            />
            <div
              style={{
                backgroundColor: "#FFE031",
                color: "black",
                width: "30%",
                display: "inline-block",
                ontFamily: "Inter",
                fontSize: "15px",
                boxShadow: "-10px 10px 0 0 black",
              }}
            >
              "Annie encouraged me to apply to roles I wouldn't normally and I
              am now in my dream job!"
            </div>
            <p>Fanyi, Investment Associate</p>
          </div>
        </div>
        <div className="text-center">
          <img
            src={joseph}
            style={{ maxWidth: "50%" }}
            className="img-fluid pt-10"
            alt="A stylised drawing of Joseph wearing a leather jacket and designing this very website"
          />
          <div
            style={{
              backgroundColor: "#FFE031",
              color: "black",
              width: "15%",
              display: "inline-block",
              ontFamily: "Inter",
              fontSize: "15px",
              boxShadow: "-10px 10px 0 0 black",
            }}
          >
            "Annie helped me structure my search and I successfully changed
            career in less than 2 months!"
          </div>
          <p>Joseph, Software Engineer</p>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default FourthPane;
