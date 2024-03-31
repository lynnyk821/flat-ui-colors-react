import PropTypes from "prop-types";

export const SideBarItem = (props) => {
    return (
        <a className="w-12 h-12 flex justify-center"  href={props.href}>
            <div className="w-11 h-11 rounded-[50%] border-2 border-gray-300 flex justify-center items-center">{props.children}</div>
        </a>
    );
}

SideBarItem.propTypes = {
    href:PropTypes.string,
    children:PropTypes.node
};