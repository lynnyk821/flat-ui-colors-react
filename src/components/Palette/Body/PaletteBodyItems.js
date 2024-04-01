export const PaletteBodyItems = ({ colors }) => {
    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color)
            .then(() => {
                alert(`Color copied to clipboard: ${color}`);
            })
            .catch((error) => {
                console.error('Error copying olor to clipboard:', error);
            });
    };
    return (
        <div className="w-full h-full grid grid-cols-5">
            {colors.map((element, id) => (
                <button
                    className="w-full h-full flex justify-end items-end flex-col p-3"
                    style={{ background: `${element.color}` }}
                    id={`palette-color-${id}`}
                    onClick={() => copyToClipboard(element.color)}
                >
                <p className="text-lg text-white font-medium">{element.name.toUpperCase()}</p>
              </button>
            ))}
        </div>
    );
};