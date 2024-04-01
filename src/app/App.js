import {Home} from "../pages/home";
import {Palette} from "../pages/palette";
import { Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/palette/:id'} element={<Palette/>}/>
        </Routes>
    );
}