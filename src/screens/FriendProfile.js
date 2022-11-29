import { Component } from "react";
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";
import StatubarComponent from "../components/StatusbarComponent";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileBottomSheet from "../components/ProfileBottomSheet";
import Entypo from 'react-native-vector-icons/Entypo';

const TABS = {
    POSTS: 'POSTS',
    REELS: 'REELS',
    TAGEDPOSTS: 'TAGEDPOSTS'
}

const mapStateToProps = (store) => {
    return {
        profile: store?.friendProfileReducer
    }
}

class ProfileScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab: TABS.POSTS,
            bottonSheetVisible: false
        }
        this.goBack = this.goBack.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
        this.openButtonSheet = this.openButtonSheet.bind(this);
        this.closeBottomSheet = this.closeBottomSheet.bind(this);
    }

    goBack(){
        const {goBack} = this.props.navigation;
        goBack();
    }

    handleSelectedTab(tab){
        this.setState({selectedTab: tab});
    }

    closeBottomSheet(){
        this.setState({bottonSheetVisible: false});
    }

    openButtonSheet(){
       this.setState({bottonSheetVisible: true});
    }


    renderItem({item}){
        return (
            <Image 
                style={styles.image}
                source={{uri: item?.image}}
            />
        )
    }

    renderTabs(){
        const {profile} = this.props;
        const {selectedTab } = this.state;
        const {posts} = profile;

        if(selectedTab == TABS.REELS) 
            return (
                <Text style={styles.tabLabel}>No reels</Text>
            )

        if(selectedTab == TABS.TAGEDPOSTS) 
            return (
                <Text style={styles.tabLabel}>No tagged posts</Text>
            )


        return (
            <FlatList 
                style={styles.list}
                numColumns={3}
                data={posts}
                renderItem={this.renderItem}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                ItemSeparatorComponent={() => <View style={styles.seperate}/>}
            />
        )
    }

    render(){
        const {profile, navigation} = this.props;
        const {selectedTab, bottonSheetVisible} = this.state;
        const {
            name,
            image, 
            postsCount, 
            followingCount, 
            followersCount,
        } = profile;
        return (
            <SafeAreaView style={styles.container}>
                <StatubarComponent />
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={this.goBack}>
                        <Ionicons 
                            name="arrow-back-outline"
                            size={26}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text style={styles.label}>{profile?.username}</Text>
                    <View style={styles.rightContainer}>
                        <TouchableOpacity
                            onPress={this.openButtonSheet}
                            style={styles.addButton}>
                            <Ionicons 
                                name="notifications-outline"
                                color='black'
                                size={26}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.menuButton}>
                            <Entypo 
                                name="dots-three-vertical"
                                color="black"
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <Image 
                        source={{uri: image}}
                        style={styles.profileImage} 
                    />
                    <View style={styles.subRow}>
                        <View style={styles.box}>
                            <Text style={styles.value}>{postsCount}</Text>
                            <Text style={styles.otherLabel}>Posts</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.value}>{followersCount}</Text>
                            <Text style={styles.otherLabel}>Followers</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.value}>{followingCount}</Text>
                            <Text style={styles.otherLabel}>Following</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.row}>
                    <TouchableOpacity 
                        style={styles.editProfileButton}>
                        <Text style={styles.editProfileButtonLabel}>Following</Text>
                        <MaterialIcons 
                            name="keyboard-arrow-down"
                            color="black"
                            size={20}
                        />
                    </TouchableOpacity>
                    <View style={{width: 10}}/>
                    <TouchableOpacity 
                        style={styles.editProfileButton}>
                        <Text style={styles.editProfileButtonLabel}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addFriendButton}>
                        <Ionicons 
                            name="person-add-outline"
                            color='black'
                            size={16}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.tabs}>
                    <TouchableOpacity 
                        style={selectedTab == TABS.POSTS ? styles.selectedTab : styles.tab}
                        onPress={this.handleSelectedTab.bind(this, TABS.POSTS)}>
                        <MaterialIcons 
                            name="grid-on"
                            color={selectedTab == TABS.POSTS ? 'black'  : 'gray'}
                            size={23}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={selectedTab == TABS.REELS ? styles.selectedTab : styles.tab}
                        onPress={this.handleSelectedTab.bind(this, TABS.REELS)}>
                        <MaterialIcons 
                            name="ondemand-video"
                            color={selectedTab == TABS.POSTS ? 'black'  : 'gray'}
                            size={23}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={selectedTab == TABS.TAGEDPOSTS ? styles.selectedTab : styles.tab}
                        onPress={this.handleSelectedTab.bind(this, TABS.TAGEDPOSTS)}>
                        <Ionicons 
                            name="logo-instagram"
                            color={selectedTab == TABS.TAGEDPOSTS ? 'black'  : 'gray'}
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
                {this.renderTabs()}
                {bottonSheetVisible && <ProfileBottomSheet closeBottomSheet={this.closeBottomSheet} navigation={navigation}/>}
            </SafeAreaView>
        )
    }

}

export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 57,
        paddingHorizontal: 20
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 14,
        marginRight: 2,
        textAlignVertical: 'center',
        marginBottom: 2,
    },
    rightContainer: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center'
    },
    addButton: {

    },
    menuButton: {
        marginLeft: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    subRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    value: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    otherLabel: {
        color: 'black',
        marginTop: 2
    },
    name: {
        paddingHorizontal: 20,
        marginVertical: 5,
        color: 'black',
        fontWeight: '500'
    },
    editProfileButton: {
        height: 42,
        borderRadius: 10,
        backgroundColor: '#eeeeee',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    editProfileButtonLabel: {
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: .2
    },
    addFriendButton: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        height: 42,
        marginLeft: 5,
        borderRadius: 10
    },
    tabs: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center'
    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        flex: 1,
        height: 50
    },
    selectedTab: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        height: 50
    },
    seperate: { 
        height: 4
    },
    image: {
        width: Dimensions.get('screen').width / 3 - 2,
        height: Dimensions.get('screen').width / 3 - 2
    },
    tabLabel: {
        marginTop: 24,
        alignSelf: 'center',
        color: 'gray'
    }
})