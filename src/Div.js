import React, { Component }  from 'react'
import {View, Text, Dimensions} from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";

class Div extends Component {
    constructor(props) {
        super(props);
        /**
         * Returns true if the screen is in portrait mode
         */
        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };
        this.state = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };
        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });
    }

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
