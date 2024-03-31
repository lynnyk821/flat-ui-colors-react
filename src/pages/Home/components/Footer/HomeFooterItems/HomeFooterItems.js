import {HomeFooterLeftItem} from "./LeftItem/HomeFooterLeftItem";
import {HomeFooterMiddleItem} from "./MiddleItem/HomeFooterMiddleItem";
import {HomeFooterRightItem} from "./RightItem/HomeFooterRightItem";

export const HomeFooterItems = () => {
    return (
        <div className="w-[1024px] h-full flex text-white">
            <HomeFooterLeftItem/>
            <HomeFooterMiddleItem/>
            <HomeFooterRightItem/>
        </div>
    );
}