export const PaletteBodyItems = ({colors}) => {
    return (
        <div className="w-full h-full grid grid-cols-5">
            {colors.map(element => (
                <button className="w-full flex items-end justify-end h-full p-3" style={{background:`${element.color}`}}>
                    <p className="text-white font-medium">{element.name.toUpperCase()}</p>
                </button>
            ))}
        </div>
    );
}