/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Div from './src/Div'
import Input from './src/Input'
import P from './src/P'
import Button from './src/Button'
const App = () => {
    return (
        <Div className={'row'}>
            <Div className={'col-3 d-block d-md-none'} style={{backgroundColor: 'red', height: 50}} />
            <Div className={'col-9'} style={{backgroundColor: 'blue', height: 50}}/>
            <Div className={'col-lg-3 col-md-12 col-6 align-self-center'} style={{backgroundColor: 'black', height: 50}}/>
            <Input className={'col-12'} descriptionInBottom={'test description'} label={'asdasd'}/>
            <P className={'badge badge-success'} bold={true}>test text</P>
            <Button transparent={true} round={true} textStyle={{fontWeight: '700'}}>
                test button
            </Button>
        </Div>
    );
};

export default App;
