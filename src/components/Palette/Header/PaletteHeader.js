export const PaletteHeader = () => {
    return (
        <div className="w-full h-[6%] px-6 flex font-medium">
            <div className="w-1/3 h-full flex items-center ">
                <a className="flex items-center gap-1" href={"/"}>
                    <span className="text-[17px] font-normal">←</span>
                    Back
                </a>
            </div>
            <div className="w-1/3 h-full flex justify-center items-center text-white">
                <button className="w-3/5 h-4/5 rounded-[6px] bg-black">
                    Copy Format: RGBA - (1,2,3,0.4)
                </button>
            </div>
            <div className="w-1/3 h-full flex items-center justify-end">
                <button>
                    <span>Sound On 🔊</span>
                </button>
            </div>
        </div>
    );
}