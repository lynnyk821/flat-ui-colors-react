import {HomeFooterItemLayout} from "../HomeFooterItemKit/HomeFooterItemLayout";
import {HomeFooterLeftItemField} from "./HomeFooterLeftItemField";

export const HomeFooterLeftItem = () => {
    return (
        <HomeFooterItemLayout width="w-1/4" title="SHARE">
            <HomeFooterLeftItemField href="/">Send via e-mail</HomeFooterLeftItemField>
            <HomeFooterLeftItemField href="/">Share on Twitter</HomeFooterLeftItemField>
            <HomeFooterLeftItemField href="/">Share on Facebook</HomeFooterLeftItemField>
            <HomeFooterLeftItemField href="/">Share on Google Plus</HomeFooterLeftItemField>
            <HomeFooterLeftItemField href="/">Share on LinkedIn</HomeFooterLeftItemField>
        </HomeFooterItemLayout>
    );
}

