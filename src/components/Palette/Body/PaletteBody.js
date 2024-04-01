import palettes from "../../../data/palette.json"
import {PaletteBodyItems} from "./PaletteBodyItems";
import { useParams } from 'react-router-dom';

export const PaletteBody = () => {
    let { id} = useParams();
    const colors = palettes[id]?.colors;
    return (
        <main className="w-full h-[88%] overflow-auto">
            {colors && <PaletteBodyItems colors={colors}></PaletteBodyItems>}
        </main>
    );
}