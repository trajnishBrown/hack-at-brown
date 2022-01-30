import "./Explore.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import State from "../../img/bystate.png";
import Facility from "../../img/num_facilities.png";

const Explore = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container className="body" maxWidth="100%" sx={{ height: "350vh" }}>
          <div className="div1-class">
            <Typography
              className="typo1-class"
              variant="body1"
              gutterBottom
              component="div"
            >
              From our analysis, the most polluting facility from our dataset in
              the year 2020 is the <b>James H Miller Jr Power Plant</b> located
              in Quinton, AL with a total greenhouse gas emission of 17232897.61
              metric tons.
            </Typography>
            <a
              href="https://goo.gl/maps/habuhZr7CGgzUuw9A"
              target="_blank"
              rel="noreferrer"
            >
              View on Map
            </a>
          </div>
          <div className="div2-class">
            <Typography
              className="typo1-class"
              variant="h6"
              gutterBottom
              component="div"
            >
              Number of Facilities by State in our Dataset
            </Typography>
            <img
              src={Facility}
              alt="number of facility by state"
              className="facility-class"
            />
            <Typography
              className="typo1-class"
              variant="body1"
              gutterBottom
              component="div"
            >
              Texas has the most number of reported facilities at 813.
            </Typography>
          </div>
          <div className="div2-class">
            <Typography
              className="typo1-class"
              variant="h6"
              gutterBottom
              component="div"
            >
              Average Pollution by State in 2020
            </Typography>
            <img
              src={State}
              alt="average pollution by state"
              className="facility-class"
            />
            <Typography
              className="typo1-class"
              variant="body1"
              gutterBottom
              component="div"
            >
              Wyoming had the highest average pollution though greenhouse gases
              in 2020 at almost 800,000 metric tons.
            </Typography>
          </div>
          <div className="button-div">
            <Button
              variant="contained"
              className="button"
              size="large"
              href="/"
            >
              Home
            </Button>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Explore;
