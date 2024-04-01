import {SideBarItem} from "./SideBarItem";

export const SideBar = () => {
    return (
        <div className="w-12 h-full pt-2 fixed flex flex-col gap-3 bg-[#e9ecf1]">
            <SideBarItem href="https://www.instagram.com/ln_nk01/">L</SideBarItem>
            <SideBarItem href="https://github.com/lynnyk821">Y</SideBarItem>
            <SideBarItem href="https://www.instagram.com/ln_nk01/">N</SideBarItem>
            <SideBarItem href="https://github.com/lynnyk821">N</SideBarItem>
            <SideBarItem href="https://www.instagram.com/ln_nk01/">Y</SideBarItem>
            <SideBarItem href="https://github.com/lynnyk821">K</SideBarItem>
            <div className="mt-auto">
                <SideBarItem href="https://www.instagram.com/ln_nk01/">Y</SideBarItem>
            </div>
        </div>
    );
}