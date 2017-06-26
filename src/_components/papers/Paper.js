import React, {Component, PropTypes} from "react";

class Paper extends Component {

    render() {
        const {className, children, ...restProps} = this.props;
        const mergedClassName = `paper ${className}`;
        return <div {...restProps} className={mergedClassName}>
            {children}
        </div>
    }
}

export default Paper;