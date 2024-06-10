import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LandingPage from "./components/Landing";
import Configurateur from "./components/Configurateur";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/configurateur" element={<Configurateur />} />
            </Routes>
        </Router>
    );
}
 
export default App;