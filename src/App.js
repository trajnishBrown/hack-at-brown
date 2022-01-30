import "./App.css";
// imports for UI reference
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";

/* Plan (Feel free to add on):
Have a cool (greenish themed) landing page to be coded here in App.js
Maybe some cool/funny animations using svg or something I dont know. Doing
some thing or telling a joke or giving instructions.
Button at the center of the page that will go into the main functionality.
(Reference is Hack@Brown website : https://2022.hackatbrown.org/)
Maybe a data science dashboard from some dataset here: https://www.epa.gov/ghgreporting/data-sets
*/

/* To implement (Feel free to add on):
1) UI for landing page 
2) react-router to route
3) deploy to firebase for extra points (Tarun will take care)
4) use gcp compute for some task (maybe)
5) Use firestore if some database operations are needed
6) Data visualization using some library 
7) Data parsing and cleaning
8) Some 3D animations if easy to implement (maybe)
9) Other pages for other functionalities
*/

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="100%" sx={{ height: "100vh", bgcolor: "#CCE0CF" }}>
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
              href="#outlined-buttons"
            >
              Explore More
            </Button>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
