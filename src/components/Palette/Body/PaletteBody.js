import palettes from "../../../data/palette.json"
import {PaletteBodyItems} from "./PaletteBodyItems/PaletteBodyItems";
import { useParams } from 'react-router-dom';

export const PaletteBody = () => {
    let { id} = useParams();

    const colors = palettes[id]?.colors;
    return (
        <div className="w-full h-[88%] overflow-auto bg-amber-100">
            {colors && <PaletteBodyItems colors={colors}></PaletteBodyItems>}
        </div>
    );
}