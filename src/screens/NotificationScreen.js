import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import StatubarComponent from '../components/StatusbarComponent';

export default class NotificationScreen extends Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <StatubarComponent />
                <Text>NotificationScreen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})