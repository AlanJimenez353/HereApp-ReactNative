import React from 'react';
import {Text,View} from 'react-native';
import Constanst from 'expo-constants'
import RepositoryList from './RepositoryList';

const Main =()=>{
    return(
        <View style={{marginTop:Constanst.statusBarHeight, flexGrow:1}}>
            <Text>Here!</Text>
            <RepositoryList/>
        </View>
    )
}
export default Main;