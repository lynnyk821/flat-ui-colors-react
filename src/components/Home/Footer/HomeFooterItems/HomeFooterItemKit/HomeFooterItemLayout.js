import * as PropTypes from "prop-types";
import {HomeFooterItemTitle} from "./HomeFooterItemTitle";
import {HomeFooterItemContent} from "./HomeFooterItemContent";

export const HomeFooterItemLayout = (props) => {
    return (
        <div className={`${props.width} h-full`}>
            <HomeFooterItemTitle>{props.title}</HomeFooterItemTitle>
            <HomeFooterItemContent>{props.children}</HomeFooterItemContent>
        </div>
    );
}

HomeFooterItemLayout.propTypes = {
    width: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
};