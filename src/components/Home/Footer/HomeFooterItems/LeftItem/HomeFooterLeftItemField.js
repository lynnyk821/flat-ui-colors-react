import * as PropTypes from "prop-types";

export const HomeFooterLeftItemField = (props) => {
    return (
        <div className="w-full h-7 flex items-center text-[16px] font-medium">
            <a href={props.href}>{props.children}</a>
        </div>
    );
}

HomeFooterLeftItemField.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string
};