export const PaletteHeader = () => {
    return (
        <div className="w-[1024px] h-28 flex text-white">
            <div className="w-2/3 h-full flex items-center text-2xl font-bold">
                <a className="w-auto" href="/">
                    FLAT UI COLORS 2
                </a>
            </div>

            <div className="w-1/3 gap-x-12 text-[17px] font-medium flex items-center last:justify-end">
                <a className="h-auto gap-2 flex items-center" href="/">
                    Designer Inspiration
                    <div className="w-12 h-5 rounded-md flex justify-center text-sm font-bold items-center bg-red-600">
                        NEW
                    </div>
                </a>
                <a className="items-end" href="/">
                    Subscribe
                </a>
            </div>
        </div>
    );
}