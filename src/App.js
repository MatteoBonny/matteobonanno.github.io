import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage/LandingPage";
import WorkViewer from "./routes/WorkViewer/WorkViewer";
import Logo from "./routes/Logo/Logo";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/work/:title" element={<WorkViewer/>} />
                <Route path="/logo" element={<Logo/>} />
                <Route path="/page3" element={<div>Pagina 3</div>} />
            </Routes>
        </Router>
    );
}

export default App;
