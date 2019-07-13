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
import Card from './src/Card'
import Gradient from './src/Gradient'
import A from './src/A'
const App = () => {
    return (
        <Card
            style={{marginTop: 40}}
            imageHeader={true}
            imageHeaderSource={'https://lh3.googleusercontent.com/ygBlJ-fD3RPZ2-t5BwrZ7eI0gA6HAy9JuatMd5vT0frpYlkzENHumrGO4rhFn31pYeae'}
        >
            <P className={'card-title'}>asdasd</P>
            <P className={'card-subtitle'}>asdasd</P>
            <A className={'card-subtitle'} href={'https://www.youtube.com/'}>
                <View>
                    <Text>asdasdas</Text>
                </View>
            </A>
        </Card>
    );
};

export default App;
