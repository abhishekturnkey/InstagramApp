import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ProfileBottomSheet({closeBottomSheet, navigation}){

    const navigateToPostPickerScreen = () => {
        navigation.navigate("PostPickerScreen");
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor='rgba(0, 0, 0, .6)'
            />
            <TouchableOpacity 
                style={{flex: 1}}
                onPress={closeBottomSheet}
            />
            <View style={styles.contentContainer}>
                <Octicons 
                    color="gray"
                    name="horizontal-rule"
                    size={40}
                    style={{
                        alignSelf: 'center'
                    }}
                />
                <Text style={styles.title}>Create</Text>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.row}>
                    <Octicons 
                        name="device-camera-video"
                        size={24}
                        color="black"
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.subTitle}>Reel</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={navigateToPostPickerScreen}
                    style={styles.row}>
                    <MaterialIcons 
                        name="grid-on"
                        size={24}
                        color="black"
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.subTitle}>Post</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <MaterialIcons 
                        name="history-toggle-off"
                        size={24}
                        color="black"
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.subTitle}>Story</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <MaterialIcons 
                        name="history-toggle-off"
                        size={24}
                        color="black"
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.subTitle}>Story Highlight</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <MaterialIcons 
                        name="online-prediction"
                        size={24}
                        color="black"
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.subTitle}>Live</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Ionicons 
                        name="newspaper-outline"
                        size={24}
                        color="black"
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.subTitle}>Guide</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: 'white',
        minHeight: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 60
    },
    title: {
        color: 'black',
        fontSize: 19,
        fontWeight: '700',
        alignSelf: 'center'
    },
    line: { 
        height: .6,
        width: '100%',
        backgroundColor: 'lightgray',
        marginVertical: 7
    },
    row: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        paddingHorizontal: 20,
        flex: 1,
        height: 55,
        borderBottomWidth: .2,
        borderBottomColor: 'lightgray',
        justifyContent: 'center'
    },
    subTitle: {
        fontSize: 15,
        color: 'black',
    }
})