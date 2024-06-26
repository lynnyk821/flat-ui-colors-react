export const HomePaletteItem = ({item, id}) => {
    const BodyPaletteItemColors = ({colors}) => {
        return (
            <div className="w-full h-4/5 grid grid-cols-5">
                {colors.map(element => (
                    <div style={{background:`${element.color}`}} className="w-full h-full"></div>
                ))}
            </div>
        );
    }
    const BodyPaletteItemNameWithEmoji = ({name, emoji}) => {
        return (
            <div className="w-full h-1/5 flex pt-2">
                <div className="w-4/5 h-full flex justify-start items-center text-[17px] font-medium">{name}</div>
                <div className="w-1/5 h-full flex justify-end items-center text-xl">{emoji}</div>
            </div>
        );
    }
    return (
        <div className="w-full h-52 rounded-lg p-2.5 bg-white">
            <a className="w-full h-full" href={`/palette/${id}`}>
                <BodyPaletteItemColors colors={item.colors}></BodyPaletteItemColors>
                <BodyPaletteItemNameWithEmoji name={item.paletteName} emoji={item.emoji}></BodyPaletteItemNameWithEmoji>
            </a>
        </div>
    );
}