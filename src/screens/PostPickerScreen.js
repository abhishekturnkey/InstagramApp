import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import StatubarComponent from '../components/StatusbarComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GalleryBottomTabScreen } from './GalleryBottomTabScreen';
import { PhotoBottomTabScreen } from './PhotoBottomTabScreen';
import { VideoBottomTabScreen } from './VideoBottomTabScreen';
const Tab = createMaterialTopTabNavigator();

function renderBottomTabs() {
    return (
      <Tab.Navigator 
        tabBarPosition="bottom"
        initialRouteName='Photo'
        screenOptions={{
            tabBarStyle: {

            },
            tabBarLabelStyle: {
                fontSize: 13,
                fontWeight: 'bold'
            },
            tabBarIndicatorStyle: {
                backgroundColor: 'black',
                height: 3
            }
        }}>
        <Tab.Screen name="Gallery" component={GalleryBottomTabScreen} />
        <Tab.Screen name="Photo" component={PhotoBottomTabScreen} />
        <Tab.Screen name="Video" component={VideoBottomTabScreen} />
      </Tab.Navigator>
    );
  }

export default class PostPickerScreen extends Component{

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        const {goBack} = this.props?.navigation;
        goBack();
    }

    getTitle(){
        return "Select"
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <StatubarComponent />
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={this.goBack}>
                        <MaterialIcons 
                            name='clear'
                            size={26}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerLabel}>{this.getTitle()}</Text>
                    <TouchableOpacity>
                        <MaterialIcons 
                            name='keyboard-arrow-down'
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.forwordButton}>
                        <MaterialIcons 
                            name='arrow-forward'
                            size={27}
                            color="#1e88e5"
                        />
                    </TouchableOpacity>
                </View>
                {renderBottomTabs()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    headerLabel: {
        marginLeft: 20,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    forwordButton: {
        marginLeft: 'auto'
    }
})