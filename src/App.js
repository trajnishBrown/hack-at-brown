import "./App.css";
// imports for UI reference
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/main/Main";
import Explore from "./components/explore/Explore";
import Navbar from "./components/navbar/Navbar";

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
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
