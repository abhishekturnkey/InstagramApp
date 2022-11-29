import { Component } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export class VideoBottomTabScreen extends Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Text>VideoBottomTabScreen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})