import {PaletteBodyItems} from "./PaletteBodyItems";

export const PaletteBody = () => {
    return (
        <div className="w-full h-[88%] overflow-auto bg-amber-500">
            <PaletteBodyItems></PaletteBodyItems>
        </div>
    );
}