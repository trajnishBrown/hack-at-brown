import "./Main.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Pollution from "../../img/pollution.jpeg";

const Main = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container className="body" maxWidth="100%" sx={{ height: "100vh" }}>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            sx={{ color: "#0F0F0F" }}
          >
            Hack @ Brown
          </Typography>
          <Typography variant="h2" gutterBottom component="div">
            Greenhouse Gas Emissions Dashboard
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Greenhouse gases trap heat and make the planet warmer. Human
            activities are responsible for almost all of the increase in
            greenhouse gases in the atmosphere over the last 150 years. The
            largest source of greenhouse gas emissions from human activities in
            the United States is from burning fossil fuels for electricity,
            heat, and transportation. We carry out some exploratory data
            analysis to find out the most polluting facility and states in the
            USA in the year 2020. This React webpage (hosted on Firebase)
            encapsulates our findings.
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Learn more by taking a look at our Google Colab notebook or by going
            directly to our plots!
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            The dataset we used can be downloaded{" "}
            <a href="https://www.epa.gov/system/files/other-files/2021-10/2020_data_summary_spreadsheets.zip">
              here
            </a>
          </Typography>
          <div className="button-div">
            <Button
              variant="outlined"
              className="button"
              size="large"
              href="https://colab.research.google.com/drive/1C_GOKRRF3Obfd4C7GYFzlnZPbpi_U7yL?authuser=2#scrollTo=D_UhymcJtT1q"
              target="_blank"
            >
              View Notebook
            </Button>
            <Button
              variant="outlined"
              className="button"
              size="large"
              href="/explore"
            >
              Findings
            </Button>
          </div>
          {/* <div className="image-div"> */}
          {/* <img className="image" src={Pollution} alt="pollution" /> */}
          {/* </div> */}
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Main;
