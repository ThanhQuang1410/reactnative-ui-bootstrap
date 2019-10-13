import React from 'react'
import { StyleSheet, Dimensions , Modal, TouchableOpacity , View , Text } from 'react-native';
import {generateStyle} from "./theme/theme";
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import PropTypes from 'prop-types';
import {useBootstrap} from "./theme/index";

class Popup extends React.Component {
    state = {
        showPopup: this.props.showPopup
    };

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.showPopup && nextProps.showPopup){
            this.setState({showPopup: nextProps.showPopup});
            return true;
        }
        if(this.state.showPopup && !nextProps.showPopup){
            this.setState({showPopup: nextProps.showPopup});
            return true;
        }
        if(this.state.showPopup && !nextState.showPopup){
            this.setState({showPopup: nextState.showPopup});
            return true;
        }
        return false;
    }

    handleClosePopup() {
        this.setState({showPopup: false})
    }

    getStylePopupPosition = (popUpPosition) => {
        switch (popUpPosition) {
            case 'middle' :
                return {alignItems: 'center', justifyContent: 'center'};
            case 'bottom' :
                return {alignItems: 'flex-end', justifyContent: 'flex-end'};
            case 'top' :
                return {alignItems: 'flex-start', justifyContent: 'flex-start'};
            default:
                return {alignItems: 'center', justifyContent: 'center'};
        }
    };

    render () {
        const {
            className,
            customClass,
            children,
            style,
            styleContent,
            popUpWidth,
            exitWithOutsideClick,
            popupBackground,
            popUpPosition,
            customExitButton,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className,customClass);
        if(this.state.showPopup){
            return(
                <View>
                    <Modal
                        onRequestClose={() => null}
                        visible={true}
                        transparent={true}
                        animationType="fade"
                        {...props}
                    >
                        <View
                            activeOpacity={1}
                            style={[
                                styles.container,
                                { backgroundColor: popupBackground },
                                this.getStylePopupPosition(popUpPosition),
                                style
                            ]}
                        >
                            <View
                                style={[
                                    styles.dialog,
                                    {width: popUpWidth},
                                    styleBlock,
                                    styleContent
                                ]}
                            >
                                {customExitButton ?
                                    customExitButton :
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.exitButton}
                                        onPress={() => {
                                            this.handleClosePopup()
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                textAlign: 'center'
                                            }}
                                        >
                                            x
                                        </Text>
                                    </TouchableOpacity>
                                }
                                {children}
                            </View>
                            {exitWithOutsideClick && <TouchableOpacity style={{flexGrow: 1, width: '100%'}} onPress={() => {this.handleClosePopup()}}/>}
                        </View>
                    </Modal>
                </View>
            )
        }
        return null;
    }
}

Popup.defaultProps = {
    className: "",
    styleContent: {},
    popUpWidth: (width*2)/3,
    showPopup: false,
    exitWithOutsideClick: true,
    popupBackground: '#00000033',
    popUpPosition: 'middle',
    customExitButton: null
};

Popup.propTypes = {
    className: PropTypes.string,
    styleContent: PropTypes.any,
    popUpWidth: PropTypes.number,
    exitWithOutsideClick: PropTypes.bool,
    showPopup: PropTypes.bool,
    popupBackground: PropTypes.string,
    popUpPosition: PropTypes.string,
    customExitButton: PropTypes.any
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        padding: 15
    },
    dialog: {
        position: 'absolute',
        zIndex: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    exitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 26,
        height: 26,
        borderRadius: 18,
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'white',
        shadowColor: "#000",
        elevation: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
    }
});
export default useBootstrap(Popup)
