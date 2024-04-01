import {ToolsAndProducts} from "./ToolsAndProducts/ToolsAndProducts";
import {HomePalettes} from "./HomePalettes/HomePalettes";

export const HomeBody = () => {
    return (
        <div className="w-[1024px]">
            <HomePalettes></HomePalettes>
            <ToolsAndProducts></ToolsAndProducts>
        </div>
    );
}