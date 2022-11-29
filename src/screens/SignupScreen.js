import { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, TextInput } from "react-native";
import StatubarComponent from "../components/StatusbarComponent";
import AntDesign from 'react-native-vector-icons/AntDesign';

const TABS = {
    PHONE: 'PHONE',
    EMAIL: 'EMAIL'
}

export default class SignupScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab: TABS.PHONE,
            input: ''
        }
        this.selectTab = this.selectTab.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.navigateToMainScreen = this.navigateToMainScreen.bind(this);
    }

    selectTab(tab){
        this.setState({input: '', selectedTab: tab});
    }

    handleInput(value){
        this.setState({input: value});
    }

    navigateToMainScreen(){
        const {navigate} = this.props.navigation;
        navigate("MainScreen");
    }

    renderInputBoxContent(){
        const {selectedTab, input} = this.state;

        if(selectedTab == TABS.EMAIL) {
            return (
                <View style={styles.inputBox}>
                    <TextInput 
                        placeholder={selectedTab == TABS.EMAIL ? 'Email': 'Phone'}
                        placeholderTextColor='gray'
                        style={styles.input}
                        value={input}
                        onChangeText={this.handleInput}
                        keyboardType="email-address"
                    />
                </View>
            )
        }
        
        return (
            <View style={styles.inputBox}>
                <Text style={styles.prefix}>IN +91</Text>
                <View style={styles.divider}/>
                <TextInput 
                    placeholder={selectedTab == TABS.EMAIL ? 'Email': 'Phone'}
                    placeholderTextColor='gray'
                    style={styles.input}
                    value={input}
                    onChangeText={this.handleInput}
                    keyboardType="number-pad"
                    maxLength={10}
                />
            </View>
        )
        
    }
    
    render(){
        const {selectedTab, input} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatubarComponent />
                <View style={styles.content}>
                    <View style={styles.userProfileContainer}>
                        <AntDesign 
                            name="user"
                            size={80}
                            color='black'
                        />
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={this.selectTab.bind(this, TABS.PHONE)} 
                            style={selectedTab == TABS.PHONE ? styles.selectedTab : styles.tab}>
                            <Text style={selectedTab == TABS.PHONE ? styles.selectedTabLabel : styles.tabLabel}>PHONE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={this.selectTab.bind(this, TABS.EMAIL)} 
                            style={selectedTab == TABS.EMAIL ? styles.selectedTab : styles.tab}>
                            <Text style={selectedTab == TABS.EMAIL ? styles.selectedTabLabel : styles.tabLabel}>EMAIL</Text>
                        </TouchableOpacity>
                    </View>
                    {this.renderInputBoxContent()}
                    <Text style={styles.label}>You may receive SMS notifications from us for security and login purposes.</Text>
                    <TouchableOpacity
                        onPress={this.navigateToMainScreen}
                        disabled={selectedTab == TABS.PHONE && input?.length !== 10} 
                        style={Object.assign({...styles.nextButton} , 
                            {opacity: input?.length !== 10 && selectedTab == TABS.PHONE ? 0.4 : 1})}>
                        <Text style={styles.nextButtonLabel}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <View style={styles.bottomRow}>
                        <Text style={styles.otherLabel}>Already have an account?</Text>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginButtonLabel}>Log in.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    userProfileContainer: {
        height: 140,
        width: 140,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignContent: 'center',
        height: 45,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabLabel: {
        color: 'gray',
        fontWeight: '600',
        fontSize: 13
    },
    selectedTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    selectedTabLabel: {
        color: 'black',
        fontWeight: '600',
        fontSize: 13
    },
    inputBox: {
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 50,
        width: '100%',
        marginVertical: 15,
        borderRadius: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    label: {
        fontSize: 12,
        textAlign: 'center',
        color: 'gray',
        lineHeight: 16
    },
    nextButton: {
        backgroundColor: '#2196f3',
        height: 44,
        width: '100%',
        borderRadius: 10,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextButtonLabel: {
        color: 'white',
        fontWeight: 'bold'
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
    },
    loginButtonLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 2,
        color: '#3f51b5'
    },
    otherLabel: {
        fontSize: 12,
        fontWeight: '500'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        borderTopWidth: .2,
        borderTopColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    prefix: {
        fontWeight: '600',
        fontSize: 14
    },
    divider: {
        width: 1,
        height: 25,
        backgroundColor: 'lightgray',
        marginHorizontal: 15
    },
    input: {
        lineHeight: 20,
        fontSize: 13,
        flex: 1
    }
});