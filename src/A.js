import React, {Component} from 'react';
import { TouchableOpacity, Linking , Text } from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";
class A extends Component {
    handlePressItem = () => {
        const {href} = this.props;
        if(href) {
            Linking.openURL(href)
        }
    };
    render () {
        const {
            style,
            className,
            children,
            ...props
        } = this.props;
        const styleBlock = generateStyle(className);

        return (
            <TouchableOpacity
                onPress={() => {
                    this.handlePressItem()
                }}
                style={[
                    styleBlock,
                    typeof children !== 'string' && style
                ]}
                activeOpacity={0.8}
                {...props}
            >
                {typeof children === 'string' ?
                    <Text style={[{color: '#007bff'},style]}>{children}</Text> :
                    children
                }
            </TouchableOpacity>
        )
    }
}
A.defaultProps = {
    className: "",
    href: null,
};
A.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string
};
export default useBootstrap(A)