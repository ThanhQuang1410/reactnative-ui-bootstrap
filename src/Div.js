import React, { Component }  from 'react'
import {View, Text} from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";

class Div extends Component {
    render() {
        const {
            style,
            className,
            children,
            customClass,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className,customClass);

        return (
            <View {...props} style={[styleBlock,style]}>
                {typeof children === 'string' ?
                    <Text>{children}</Text> :
                    children
                }
            </View>
        );
    }
}

Div.defaultProps ={
    className: ""
};
Div.propTypes = {
    className: PropTypes.string
};
export default useBootstrap(Div);
