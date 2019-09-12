import React,{Component} from 'react';
import { Animated, Easing , View } from 'react-native';
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";

class AnimatedView extends Component {
    constructor (props) {
        super(props);
        const {animatePropertyName} = this.props;
        animatePropertyName.forEach(animation => {
            this[animation.property] = new Animated.Value(0)
        });
    }

    _animate = () =>  {
        const {animatePropertyName} = this.props;
        let animationList = [];
        animatePropertyName.forEach(animation => {
            this[animation.property].setValue(0);
            animationList.push(
                Animated.timing(
                    this[animation.property],
                    {
                        toValue: 1,
                        duration: animation.animateDuration,
                        delay: animation.animationDelay,
                        easing: this.animateType(animation.easing)
                    }
                )
            )
        });
        Animated.parallel(animationList).start();
    };

    componentDidMount() {
        const {shouldStartAnimation} = this.props;
        if (shouldStartAnimation) {
            this._animate();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.shouldStartAnimation){
            this._animate();
            return true;
        }
        return false;
    }

    animateType = (animateType) => {
        switch (animateType) {
            case 'bounce' :
                return Easing.bounce;
                break;
            case 'cubic' :
                return Easing.cubic;
                break;
            case 'back' :
                return Easing.back(2);
                break;
            case 'elastic' :
                return Easing.elastic(2);
                break;
            case 'ease' :
                return Easing.ease;
                break;
            case 'inOut' :
                return Easing.inOut(Easing.quad);
                break;
            case 'in' :
                return Easing.in(Easing.quad);
                break;
            case 'out' :
                return Easing.out(Easing.quad);
                break;
            case 'sin' :
                return Easing.sin;
                break;
            case 'linear' :
                return Easing.linear;
                break;
            case 'quad' :
                return Easing.quad;
                break;
            default:
                return Easing.ease;
        }
    };

    render () {
        const {
            className,
            children,
            animatePropertyName,
            ...props
        } = this.props;
        let {style} = this.props;
        if(!style) style = {};
        if(animatePropertyName) {
            animatePropertyName.forEach(animation => {
                style[animation.property] = this[animation.property].interpolate({
                        inputRange: [0, 1],
                        outputRange: [animation.startValue, animation.endValue]
                    });
            })
        }
        const styleBlock = generateStyle(className);

        return (
            <Animated.View
                style={[
                    styleBlock,
                    style
                ]}
                {...props}
            >
                {children}
            </Animated.View>
        );
    }
}
AnimatedView.defaultProps = {
    className: "",
    animatePropertyName: null,
    shouldStartAnimation: false
};

AnimatedView.propTypes = {
    className: PropTypes.string,
    animatePropertyName: PropTypes.any,
    shouldStartAnimation: PropTypes.bool
};

export default useBootstrap(AnimatedView)