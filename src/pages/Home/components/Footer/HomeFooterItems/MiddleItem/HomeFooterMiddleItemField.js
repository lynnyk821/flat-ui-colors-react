import * as PropTypes from "prop-types";

export const HomeFooterMiddleItemField = (props) => {
    return (
        <div className="w-full h-7 flex items-center text-[16px] font-medium">
            <a className="w-full flex gap-2" href={props.href}>
                <span>{props.emoji}</span>
                <span>{props.children}</span>
            </a>
        </div>
    );
}

HomeFooterMiddleItemField.propTypes = {
    href: PropTypes.string,
    emoji: PropTypes.string,
    children: PropTypes.node
};