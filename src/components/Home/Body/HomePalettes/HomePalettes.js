import palettes from "../../../../data/palette.json";
import {HomePaletteItem} from "./HomePaletteItem/HomePaletteItem";

export const HomePalettes = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-12 justify-center items-center">
            {palettes.map((palette, id) => (
                <HomePaletteItem item={palette} id={id}/>
            ))}
        </div>
    );
}