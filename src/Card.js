import React, { Component }  from 'react'
import { View , Image , Text } from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';
import { generateStyle } from "./theme/theme";

class Card extends Component {
    renderImage = (imageHeight, imageSource , styleImage, top) => {
        const {header, footer} = this.props;
        return (
            <View
                style={[
                    {
                        overflow: 'hidden',
                        borderWidth: 0
                    },
                    top ? (header ? {} : {borderTopLeftRadius: 7, borderTopRightRadius: 7}) :
                        (footer ? {} : {borderBottomLeftRadius: 7, borderBottomRightRadius: 7})
                ]}
            >
                <Image
                    style={[
                        {
                            width: 'auto',
                            height: imageHeight,
                        },
                        styleImage
                    ]}
                    resizeMode={'cover'}
                    source={{uri: imageSource}}
                />
            </View>
        )
    }
    render() {
        const {
            style,
            className,
            customClass,
            children,
            imageHeader,
            imageHeaderSource,
            imageHeaderHeight,
            styleImageHeader,
            imageBottom,
            imageBottomSource,
            imageBottomHeight,
            styleImageBottom,
            styleContent,
            header,
            headerContent,
            headerTextStyle,
            footer,
            footerContent,
            footerTextStyle,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className,customClass);
        return (
            <View
                {...props}
                style={[
                    {
                        margin: 4,
                        shadowColor: "#000",
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.07,
                        shadowRadius: 15,
                        borderRadius: 7,
                        backgroundColor: 'white',
                    },
                    styleBlock,
                    style
                ]}>
                {
                    header &&
                    headerContent &&
                    typeof headerContent === 'string' ?
                        <Text style={headerTextStyle}>{headerContent}</Text> :
                        headerContent
                }
                {
                    imageHeader &&
                    imageHeaderSource &&
                    this.renderImage(imageHeaderHeight, imageHeaderSource, styleImageHeader, imageHeader)
                }
                {children &&
                <View
                    style={[
                        {
                            padding: 10
                        },
                        styleContent
                    ]}
                >
                    {children}
                </View>
                }
                {
                    imageBottom &&
                    imageBottomSource &&
                    this.renderImage(imageBottomHeight, imageBottomSource , styleImageBottom, !imageBottom)
                }
                {
                    footer &&
                    footerContent &&
                    typeof footerContent === 'string' ?
                        <Text style={footerTextStyle}>{footerContent}</Text> :
                        footerContent
                }
            </View>
        );
    }
}

Card.defaultProps ={
    className: "",
    imageHeader: false,
    imageHeaderSource: null,
    imageHeaderHeight : 200,
    styleImageHeader : {},
    imageBottom: false,
    imageBottomSource: null,
    imageBottomHeight: 200,
    styleImageBottom: {},
    styleContent: {},
    header: false,
    headerContent: null,
    footer: false,
    footerContent: null,
    headerTextStyle: {},
    footerTextStyle: {}
};
Card.propTypes = {
    className: PropTypes.string,
    imageHeader: PropTypes.bool,
    imageHeaderSource: PropTypes.string,
    imageHeaderHeight: PropTypes.number,
    styleImageHeader: PropTypes.any,
    imageBottom: PropTypes.bool,
    imageBottomSource: PropTypes.string,
    imageBottomHeight: PropTypes.number,
    styleImageBottom: PropTypes.any,
    styleContent: PropTypes.any,
    header: PropTypes.bool,
    headerContent: PropTypes.any,
    footer: PropTypes.bool,
    footerContent: PropTypes.any,
    headerTextStyle: PropTypes.any,
    footerTextStyle: PropTypes.any,
};
export default useBootstrap(Card);
