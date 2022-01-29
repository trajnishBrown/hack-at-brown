import "./App.css";
// imports for UI reference
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";

/* Plan (Feel free to add on):
Have a cool (greenish themed) landing page to be coded here.
Button at the center of the page that will go into the main functionality.
Maybe a data science dashboard from some dataset here: https://www.epa.gov/ghgreporting/data-sets
*/

/* To implement (Feel free to add on):
1) UI for landing page
2) react-router to route
3) deploy to firebase for points (Tarun will take care)
4) use gcp compute for some task (maybe)
5) Use firestore if some database operations are needed
6) Data visualization using some library 
7) Data parsing and cleaning
8) Some 3D animations if easy to implement (maybe)
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
