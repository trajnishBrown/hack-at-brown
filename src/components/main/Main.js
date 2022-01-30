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
            The Greenhouse Webapp
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Greenhouse gases trap heat and make the planet warmer. Human
            activities are responsible for almost all of the increase in
            greenhouse gases in the atmosphere over the last 150 years.1 The
            largest source of greenhouse gas emissions from human activities in
            the United States is from burning fossil fuels for electricity,
            heat, and transportation.
          </Typography>
          <div className="button-div">
            <Button
              variant="outlined"
              className="button"
              size="large"
              href="/explore"
            >
              Explore More
            </Button>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Main;
