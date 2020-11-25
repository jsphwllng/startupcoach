import "bootstrap/dist/css/bootstrap.min.css";
import FirstPane from "./components/firstpane.component";
import SecondPane from "./components/secondpane.component";
import ThirdPane from "./components/thirdpane.component";
import FourthPane from "./components/fourthpane.component";
import FithPane from "./components/fithpane.component";
import "./index.css"
import Helmet from "react-helmet";

function App() {
  return (
    // the first orange one
    <div
      style={{
        width: "100%",
        height: "100%;",
        margin: "0px;",
        padding: "0px;",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>Job Search Coach</title>
        <meta
          name="description"
          content="Take control of your career today with an actual recruiter."
        />
        <meta itemprop="name" content="Job Search Coaching by Annie" />
        <meta
          itemprop="description"
          content="Take control of your career today with an actual recruiter."
        />
        <meta itemprop="image" content="https://i.imgur.com/RZEwl3a.png" />
        <meta property="og:url" content="http://www.anniecoaching.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Job Search Coaching by Annie" />
        <meta
          property="og:description"
          content="Take control of your career today with an actual recruiter."
        />
        <meta property="og:image" content="https://i.imgur.com/RZEwl3a.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Job Search Coaching by Annie" />
        <meta
          name="twitter:description"
          content="Take control of your career today with an actual recruiter."
        />
        <meta name="twitter:image" content="https://i.imgur.com/RZEwl3a.png" />
      </Helmet>
      <FirstPane />
      <SecondPane />
      <ThirdPane />
      <FourthPane />
      <FithPane />
    </div>
    //
  );
}

export default App;
