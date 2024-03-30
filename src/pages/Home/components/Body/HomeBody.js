import {Palettes} from "./Palettes/Palettes";
import {ToolsAndProducts} from "./ToolsAndProducts/ToolsAndProducts";

export const HomeBody = () => {
    return (
        <div className="w-[1024px]">
            <Palettes></Palettes>
            <ToolsAndProducts></ToolsAndProducts>
        </div>
    );
}