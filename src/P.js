import React, {Component} from 'react'
import { Text } from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";
import {adjust} from './helper/adjust';
class P extends Component {
    render () {
        const {
            style,
            className,
            children,
            h1,
            h2,
            h3,
            h4,
            h5,
            p,
            color,
            bold,
            italic,
            center,
            size,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className);
        return (
            <Text
                {...props}
                style={[
                    h1 && { fontSize: adjust(44) },
                    h2 && { fontSize: adjust(38) },
                    h3 && { fontSize: adjust(30) },
                    h4 && { fontSize: adjust(24) },
                    h5 && { fontSize: adjust(18) },
                    p && { fontSize: adjust(16) },
                    size && { fontSize: size },
                    color && { color },
                    italic && { fontStyle: 'italic' },
                    bold && { fontWeight: 'bold' },
                    center && { textAlign: 'center' },
                    style,
                    styleBlock
                ]}>
                {children}
            </Text>
        )
    }
}

P.defaultProps ={
    className: "",
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    p: false,
    color: null,
    muted: false,
    bold: false,
    italic: false,
    style: {},
    size: 0
};
P.propTypes = {
    className: PropTypes.string,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h5: PropTypes.bool,
    p: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    muted: PropTypes.bool,
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    style: PropTypes.any
};
export default useBootstrap(P);
