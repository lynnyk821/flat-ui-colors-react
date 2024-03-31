import {SideBarItem} from "./SideBarItem";

export const SideBar = () => {
    return (
        <div className="w-12 h-full pt-2 fixed flex flex-col gap-3 bg-[#e9ecf1]">
            <SideBarItem href="/">L</SideBarItem>
            <SideBarItem href="/">Y</SideBarItem>
            <SideBarItem href="/">N</SideBarItem>
            <SideBarItem href="/">N</SideBarItem>
            <SideBarItem href="/">Y</SideBarItem>
            <SideBarItem href="/">K</SideBarItem>
            <div className="mt-auto">
                <SideBarItem href="/">Y</SideBarItem>
            </div>
        </div>
    );
}