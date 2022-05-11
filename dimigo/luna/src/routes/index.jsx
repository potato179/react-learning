import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {Main} />
            <Route path = "/Login" element = {Login} />
            <Route path = "/Signup" element = {Signup} />
        </Routes>
    );
};