import { Component } from "react";
import {connect} from 'react-redux';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import StatubarComponent from "../components/StatusbarComponent";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const mapStateToProps = (store) => {
    return {
        profile: store?.profileReducer
    }
}

class EditProfileScreen extends Component{

    constructor(props){
        super(props);
        this.cancelButton = this.cancelButton.bind(this);
    }

    cancelButton(){
        const {goBack} = this.props?.navigation;
        goBack();
    }

    render(){
        const {profile} = this.props;
        const {image} = profile;
        return (
            <SafeAreaView style={styles.container}>
                <StatubarComponent />
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={this.cancelButton}>
                        <MaterialIcons 
                            name="clear"
                            size={28}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Edit Profile</Text>
                    <TouchableOpacity
                        style={styles.checkButton}>
                        <Ionicons 
                            name="checkmark"
                            size={28}
                            color='#42a5f5'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Image 
                        source={{uri: image}}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.avtaar}>
                        <MaterialCommunityIcons 
                            name="account-cowboy-hat-outline"
                            size={40}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.label}>Edit picture or avatar</Text>
                </TouchableOpacity>
                <View style={styles.field}>
                    <Text style={styles.subTitle}>Name</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.subTitle}>Username</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.subTitle}>Bio</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <Text style={styles.otherSubTitle}>Add Link</Text>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.butonLabel}>Switch to professional account</Text>
                </TouchableOpacity>
                <View style={styles.line}/>
                <View style={styles.space}/>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.butonLabel}>Personal information settings</Text>
                </TouchableOpacity>
                <View style={styles.line}/>
            </SafeAreaView>
        )
    }
}

export default connect(mapStateToProps)(EditProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 57,
        paddingHorizontal: 20
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },
    checkButton: {
        marginLeft: 'auto'
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15
    },
    image: {
        width: 86,
        height: 86,
        borderRadius: 50
    },
    avtaar: {
        width: 86,
        height: 86,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 50,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    label: {
        fontWeight: 'bold',
        color: '#42a5f5',
        letterSpacing: .1
    },
    field: {
        marginTop: 10,
        paddingHorizontal: 20
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        height: 40
    },
    subTitle: {
        fontWeight: '400',
        color: 'gray',
        fontSize: 13,
    },
    otherSubTitle: {
        fontWeight: '500',
        color: 'black',
        fontSize: 16,
        marginVertical: 18,
        paddingHorizontal: 20
    },
    button: {
        marginVertical: 5,
        height: 45,
        justifyContent: 'center'
    },
    line: {
        height: .3,
        backgroundColor: 'lightgray',
        // marginVertical: 5
    },
    butonLabel: {
        paddingHorizontal: 20,
        fontSize: 15,
        color: '#42a5f5',
        fontWeight: '500'
    },
    space: {
        height: 18
    }
})