import {Home} from "../pages/home";
import {Palette} from "../pages/palette";
import { Route, Router, Routes} from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/palette/*'} element={<Palette/>}/>
        </Routes>
    );
}