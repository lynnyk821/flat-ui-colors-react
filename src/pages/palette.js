import {SideBar} from "../components/Sidebar/SideBar";
import {PaletteHeader} from "../components/Palette/Header/PaletteHeader";
import {PaletteBody} from "../components/Palette/Body/PaletteBody";
import {PaletteFooter} from "../components/Palette/Footer/PaletteFooter";

export const Palette = () => {
    const PaletteContainer = ({children}) => {
        return (
            <div className="w-full h-[100svh] pl-12">{children}</div>
        );
    }
    return (
        <>
            <SideBar></SideBar>
            <PaletteContainer>
                <PaletteHeader></PaletteHeader>
                <PaletteBody></PaletteBody>
                <PaletteFooter></PaletteFooter>
            </PaletteContainer>
        </>
    );
}
