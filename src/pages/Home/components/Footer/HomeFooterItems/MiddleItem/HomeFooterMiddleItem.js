import {HomeFooterItemLayout} from "../HomeFooterItemKit/HomeFooterItemLayout";
import {HomeFooterMiddleItemField} from "./HomeFooterMiddleItemField";

export const HomeFooterMiddleItem = () => {
    return (
        <HomeFooterItemLayout width="w-1/4" title="MORE">
            <HomeFooterMiddleItemField emoji="👋" href="/">Contact Me</HomeFooterMiddleItemField>
            <HomeFooterMiddleItemField href="/"></HomeFooterMiddleItemField>
            <HomeFooterMiddleItemField emoji="📩" href="/">Subscribe</HomeFooterMiddleItemField>
            <HomeFooterMiddleItemField emoji="🎉" href="/">Submit</HomeFooterMiddleItemField>
            <HomeFooterMiddleItemField emoji="🤙" href="/">Replay Onboarding</HomeFooterMiddleItemField>

        </HomeFooterItemLayout>
    );
}