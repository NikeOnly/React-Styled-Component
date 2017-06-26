import React, {Component, PropTypes} from "react";


class Input extends Component {

    static propTypes = {
        link: PropTypes.shape({
            context: PropTypes.element.isRequired,
            name: PropTypes.string.isRequired,
            validation: PropTypes.func // if returns false, then state won't update the value.
        }),
        error: PropTypes.bool
    };

    static defaultProps = {
        error: false
    };

    render() {
        const {link, error, className, ...restProps} = this.props;

        const mergedClassName = `input ${error ? "error" : ""} ${className || ""}`;

        const linkedValues = {};
        if (link) {
            linkedValues.value = link.context.state[link.name] || "";
            linkedValues.onChange = (e) => {
                const {value} = e.target;
                if (!link.validation || link.validation.apply(link.context, [link.name, value]) !== false) {
                    link.context.setState({[link.name]: value});
                }
            };
        }

        return <input {...restProps} {...linkedValues} className={mergedClassName}/>
    }
}

export default Input;