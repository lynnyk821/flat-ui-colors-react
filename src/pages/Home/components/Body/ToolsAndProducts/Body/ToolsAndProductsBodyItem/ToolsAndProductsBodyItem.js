export const ToolsAndProductsBodyItem = ({img, name, link, children}) => {
    return (
        <a className="w-full h-56 text-white mb-5 flex" href={link}>
            <div className="w-1/3">
                <img
                    className="w-72 h-48"
                    src={img}
                    alt="tools&products-image"
                />
            </div>
            <div className="w-2/3 h-48">
                <div className="w-full h-1/5 text-[22px] mb-5 font-bold">
                    {name}
                </div>
                <div className="w-full h-3/5 text-[15px] font-medium">
                    {children}
                </div>
                <div className="w-full h-1/5 text-[16px] font-medium">
                    {link}
                </div>
            </div>
        </a>
    );
}