import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Resume } from "./Components/resume";
import { Portfolio } from "./Components/portfolio";
import { Contact } from "./Components/contact";


export const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/about"} element={<About/>}></Route>
            <Route path={"/resume"} element={<Resume/>}></Route>
            <Route path={"/portfolio"} element={<Portfolio/>}></Route>
            <Route path={"/contact"} element={<Contact/>}></Route>
        </Routes>
        </>
    );
}