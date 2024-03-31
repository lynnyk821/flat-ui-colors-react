import * as PropTypes from "prop-types";

export const HomeFooterRightItemField = (props) => {
    return (
        <div className="w-full h-7 flex items-center text-[16px] font-medium">
            <div className="w-full flex gap-1">
                {props.children}
            </div>
        </div>
    );
}

HomeFooterRightItemField.propTypes = {
    children: PropTypes.node
};