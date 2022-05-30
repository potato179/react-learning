import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Login from "../pages/login";
import Signup from "../pages/join";

const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main/>} />
            <Route path = "/Login" element = {<Login/>} />
            <Route path = "/Signup" element = {<Signup/>} />
        </Routes>
    );
};

export default Router;