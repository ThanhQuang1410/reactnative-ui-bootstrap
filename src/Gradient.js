import React, {Component} from 'react'
import {View} from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";

class Gradient extends Component {
    renderFirstGradient(data,gradientBackground,gradientLength) {
        const {
            height,
            horizontal,
            width
        } = this.props;
        return (
            <View
                style={[
                    {
                        position: 'absolute',
                        zIndex: 1,
                        height: '100%',
                        width: '100%',
                    },
                    !horizontal && {flexDirection: 'row'}
                ]}
            >
                {data.map((item, i) => (
                    <View
                        key={i}
                        style={[
                            {
                                backgroundColor: gradientBackground,
                                right: 0,
                                left: 0,
                                opacity: (1 / gradientLength) * (i + (gradientLength/9))
                            },
                            !horizontal ? {width: 1, height: height} : { height: 1 , width: width}
                        ]}
                    />
                ))}
            </View>
        )
    }
    renderSecondGradient(data,gradientBackgroundSecond,gradientLength) {
        const {
            height,
            horizontal,
            width
        } = this.props;
        return (
            <View
                style={[
                    {
                        position: 'absolute',
                        zIndex: 2,
                        height: '100%',
                        width: '100%',
                    },
                    !horizontal && {flexDirection: 'row'}
                ]}
            >
                {data.map((item, i) => (
                    <View
                        key={i}
                        style={[
                            {
                                backgroundColor: gradientBackgroundSecond,
                                right: 0,
                                left: 0,
                                opacity: 1 - ((i+1)/(gradientLength + gradientLength/9))
                            },
                            !horizontal ? {width: 1, height: height} : { height: 1 , width: width}]}
                    />
                ))}
            </View>
        )
    }
    render () {
        const {
            style,
            className,
            children,
            height,
            width,
            horizontal,
            firstColor,
            secondColor,
            revert,
            contentStyle,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className);
        let gradientHeight = horizontal ? height : width;
        let gradientWidth = horizontal ? width : height;

        const gradientBackground  = revert ? secondColor : firstColor;
        const gradientBackgroundSecond = revert ? firstColor : secondColor;

        const gradientLength = gradientHeight >= gradientWidth ? gradientHeight : gradientWidth;
        const data = Array.from({ length: gradientLength });
        return (
            <View
                {...props}
                style={[
                    {
                        width: gradientWidth,
                        height: gradientHeight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    styleBlock,
                    style
                ]}
            >
                {this.renderFirstGradient(data, gradientBackground, gradientLength)}
                {this.renderSecondGradient(data, gradientBackgroundSecond, gradientLength)}
                {children &&
                    <View
                        style={[
                            {
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                zIndex: 3
                            },
                            contentStyle
                        ]}
                    >
                        {children}
                    </View>
                }
            </View>
        )
    }
}
Gradient.defaultProps ={
    className: "",
    height: 80,
    width: 80,
    horizontal: true,
    firstColor : "#009FFF",
    secondColor : "#ec2F4B",
    revert : false,
    contentStyle: {}
};
Gradient.propTypes = {
    className: PropTypes.string,
    height : PropTypes.number,
    width : PropTypes.number,
    horizontal : PropTypes.bool,
    firstColor : PropTypes.string,
    secondColor : PropTypes.string,
    revert : PropTypes.bool,
    contentStyle: PropTypes.any
};
export default useBootstrap(Gradient);