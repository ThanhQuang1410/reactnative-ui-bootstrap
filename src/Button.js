import React,{Component} from 'react'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle , hexToRgb } from "./theme/theme";
import { TouchableOpacity , ActivityIndicator , Text } from 'react-native';
import {theme} from "./theme/bootstrap";

class Button extends Component {
    renderContent = () => {
        const {
            loading,
            loadingSize,
            loadingColor,
            children,
            onlyIcon,
            icon,
            iconFamily,
            iconSize,
            iconColor,
            uppercase,
            lowercase,
            capitalize,
            textStyle,
            type,
            transparent,
            backGround,
            disabled
        } = this.props;
        const textStyles = [{
            color:
                transparent ?
                    (backGround ?
                        (disabled ? hexToRgb(backGround,0.8) : backGround) :
                        (disabled ? hexToRgb(theme.color[type.toUpperCase()], 0.8) : theme.color[type.toUpperCase()]))  :
                    (disabled ? hexToRgb('#fff',0.8) : 'white')
            }, textStyle];

        let content = children;
        const isString = children && typeof children === 'string';

        if (uppercase && isString) content = children.toUpperCase();
        if (lowercase && isString) content = children.toLowerCase();
        if (capitalize && isString) content = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;

        if (onlyIcon) {
            content = (
                <Icon
                    name={icon}
                    family={iconFamily}
                    size={iconSize}
                    color={(disabled ? hexToRgb(iconColor,0.8) : iconColor) || (disabled ? hexToRgb(theme.color[type.toUpperCase()], 0.8) : theme.color[type.toUpperCase()])}
                />
            );
        } else if (isString) {
            content = <Text style={textStyles}>{content}</Text>;
        }

        if (loading) content = <ActivityIndicator size={loadingSize} color={transparent ? (backGround ? (disabled ? hexToRgb(backGround,0.8) : backGround) :
            (disabled ? hexToRgb(theme.color[type.toUpperCase()], 0.8) : theme.color[type.toUpperCase()])) : (disabled ? hexToRgb(loadingColor, 0.8) : loadingColor)} />;

        return content;
    };
    render() {
        const {
            style,
            className,
            disabled,
            type,
            opacity,
            full,
            backGround,
            onlyIcon,
            iconSize,
            shadowColor,
            shadow,
            round,
            transparent,
            radius,
            shadowElevation,
            shadowWidth,
            shadowHeight,
            shadowOpacity,
            shadowRadius,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className);

        return (
            <TouchableOpacity
                {...props}
                disabled={disabled}
                activeOpacity={opacity}
                style={[
                    { zIndex: 2 },
                    {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: backGround ? backGround : theme.color[type.toUpperCase()],
                        height: 40,
                        paddingRight: 15,
                        paddingLeft: 15
                    },
                    full && {width: '100%'},
                    round && { borderRadius: 20 },
                    onlyIcon && {
                        width: iconSize * 1.25,
                        height: iconSize * 2,
                        borderWidth: 0,
                        borderRadius: iconSize,
                    },
                    disabled && {opacity: 0.8},
                    radius && { borderRadius: radius },
                    transparent && { backgroundColor: shadow ? 'white' : "transparent" , borderWidth: 1.25, borderColor: backGround ? backGround : theme.color[type.toUpperCase()] },
                    shadow && {
                        shadowColor: shadowColor || theme.color[type.toUpperCase()],
                        elevation: shadowElevation,
                        shadowOffset: { width: shadowWidth, height: shadowHeight },
                        shadowOpacity: shadowOpacity,
                        shadowRadius: shadowRadius,
                    },
                    styleBlock,
                    style
                ]}>
                {this.renderContent()}
            </TouchableOpacity>
        );
    }
}
Button.defaultProps ={
    className: "",
    type: 'primary',
    loadingColor: 'white',
    backGround: null,
    disabled: false,
    radius: 0,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    shadowless: false,
    shadowColor: false,
    onlyIcon: false,
    loading: false,
    shadow: false,
    round: false,
    transparent: false,
    loadingSize: 'small',
    opacity: 0.8,
    icon: false,
    iconSize: 14,
    iconColor: null,
    textStyle: {},
    full: false,
    shadowElevation : 4,
    shadowWidth : 2,
    shadowHeight : 2,
    shadowOpacity : 0.2,
    shadowRadius : 2,
};
Button.propTypes = {
    ...TouchableOpacity.propTypes,
    className: PropTypes.string,
    type: PropTypes.string,
    backGround: PropTypes.string,
    disabled: PropTypes.bool,
    style: PropTypes.any,
    radius: PropTypes.number,
    uppercase: PropTypes.bool,
    lowercase: PropTypes.bool,
    capitalize: PropTypes.bool,
    shadowless: PropTypes.bool,
    shadowColor: PropTypes.bool,
    round: PropTypes.bool,
    transparent: PropTypes.bool,
    shadow: PropTypes.bool,
    onlyIcon: PropTypes.bool,
    loading: PropTypes.bool,
    loadingSize: PropTypes.string,
    loadingColor: PropTypes.string,
    opacity: PropTypes.number,
    icon: PropTypes.bool,
    iconSize: PropTypes.number,
    textStyle: PropTypes.any,
    full: PropTypes.bool,
    shadowElevation : PropTypes.number,
    shadowWidth : PropTypes.number,
    shadowHeight : PropTypes.number,
    shadowOpacity : PropTypes.number,
    shadowRadius : PropTypes.number,
};
export default useBootstrap(Button);