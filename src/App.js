import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LandingPage from "./components/Landing";
import Configurateur from "./components/Configurateur";

import Navbar from "./components/Navbar";
 
function App() {
    return (
      <>
        <Navbar />
          <Router>
              <Routes>
                  <Route exact path="/" element={<LandingPage />} />
                  <Route path="/configurateur" element={<Configurateur />} />
              </Routes>
          </Router>
      </>
    );
}
 
export default App;