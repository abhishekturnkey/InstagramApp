import { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default class SignInScreen extends Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.userProfileContainer}>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    userProfileContainer: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: 'black',
    }
})