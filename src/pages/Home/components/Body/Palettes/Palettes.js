import palettes from "../../../../../palette.json";
import {PaletteItem} from "./PaletteItem/PaletteItem";

export const Palettes = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-12 justify-center items-center">
            {palettes.map(palette => (
                <PaletteItem item={palette}/>
            ))}
        </div>
    );
}