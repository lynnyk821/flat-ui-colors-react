import {HomeFooterItemLayout} from "../HomeFooterItemKit/HomeFooterItemLayout";
import {HomeFooterRightItemField} from "./HomeFooterRightItemField";

export const HomeFooterRightItem = () => {
    return (
        <HomeFooterItemLayout width="w-1/2" title="ABOUT">
            <HomeFooterRightItemField>
                Flat UI Colors 2 brought to you by Ahmet Sulek.
            </HomeFooterRightItemField>

            <HomeFooterRightItemField>
                <a className="border-b-2" href="/">Follow me on Twitter</a><p>or</p>
                <a className="border-b-2" href="/">Subscribe</a><p>to be the first to know</p>
            </HomeFooterRightItemField>

            <HomeFooterRightItemField>
                when I launch new products.
            </HomeFooterRightItemField>

            <HomeFooterRightItemField>{/*empty field*/}</HomeFooterRightItemField>

            <HomeFooterRightItemField>
                <p>Read the article on</p>
                <a className="border-b-2" href="/">Medium</a>
                <p>to learn more.</p>
            </HomeFooterRightItemField>
        </HomeFooterItemLayout>
    );
}