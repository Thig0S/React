import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Sobre from "./Components/Sobre/Sobre.jsx";

function App(){
    return(
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="Home" element={<Home/>}></Route>
                    <Route path="Sobre" element={<Sobre/>}></Route>
                </Routes>
            </Router>
        </>
    );
}
export default App