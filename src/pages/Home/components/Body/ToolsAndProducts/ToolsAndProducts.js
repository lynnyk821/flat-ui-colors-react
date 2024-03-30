import {ToolsAndProductsHeader} from "./Header/ToolsAndProductsHeader";
import {ToolsAndProductsBody} from "./Body/ToolsAndProductsBody";

export const ToolsAndProducts = () => {
    return (
        <div className="w-full">
            <ToolsAndProductsHeader></ToolsAndProductsHeader>
            <ToolsAndProductsBody></ToolsAndProductsBody>
        </div>
    );
}