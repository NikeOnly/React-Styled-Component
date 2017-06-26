import React, {Component, PropTypes} from "react";

const TYPE_TO_CLASS_NAME = {
    "primary": "button_primary",
    "secondary": "button_secondary"
};

class Button extends Component {

    static propTypes = {
        type: PropTypes.oneOf(Object.keys(TYPE_TO_CLASS_NAME))
    };

    static defaultProps = {
        type: "primary"
    };

    render() {
        const {className, disabled, type, children, ...restProps} = this.props;
        const mergedClassName = `button ${TYPE_TO_CLASS_NAME[type] || TYPE_TO_CLASS_NAME.primary} ${disabled ? "disabled" : ""} ${className}`;
        return <button {...restProps} className={mergedClassName} disabled={disabled}>
            {children}
        </button>
    }
}

export default Button;