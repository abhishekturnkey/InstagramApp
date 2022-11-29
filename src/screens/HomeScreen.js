import { Component } from "react";
import {connect} from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, FlatList, Image, Dimensions } from "react-native";
import StatubarComponent from "../components/StatusbarComponent";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import ProfileBottomSheet from "../components/ProfileBottomSheet";
import { navigateToFriendProfile } from "../utils/navigations";

const mapPropsToState = function (state){
    return {
        posts: state?.homeReducer?.posts
    }
}

class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            bottonSheetVisible: false
        }
        this.renderItem = this.renderItem.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.openButtonSheet = this.openButtonSheet.bind(this);
        this.closeBottomSheet = this.closeBottomSheet.bind(this);
    }

    closeBottomSheet(){
        this.setState({bottonSheetVisible: false});
    }

    openButtonSheet(){
       this.setState({bottonSheetVisible: true});
    }

    renderImage({item}){
        return (
            <View style={styles.image2Container}>
                <Image 
                    style={styles.image2}
                    source={{uri: item}}
                />
            </View>
        )
    }

    renderItem({item}){
        const {navigation} = this.props;
        const {id, user, image, likedBy, description, commentsMeta} = item;
        const {totalComments, comments} = commentsMeta;
        const {images, name, other} = likedBy;
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image} 
                    source={{uri: image}}
                />
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={styles.option}>
                        <Ionicons 
                            name='heart-outline'
                            size={28}
                            color="black"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}>
                        <Fontisto 
                            name='comment'
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}>
                        <Feather 
                            name='send'
                            size={26}
                            color="black"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bookmark}>
                        <MaterialIcons 
                            name='bookmark-border'
                            size={30}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.likeRow}>
                    {/* <FlatList 
                        horizontal
                        data={images}
                        ItemSeparatorComponent={() => <View style={{width: 5}}/>}
                        style={{flexGrow: 0, marginRight: 10}}
                        renderItem={this.renderImage}
                    /> */}
                    <Text style={styles.otherLabel}>Liked by </Text>
                    <TouchableOpacity
                        onPress={navigateToFriendProfile.bind(this, navigation)}>
                        <Text style={styles.likedLabel}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.otherLabel}> and </Text>
                    <TouchableOpacity>
                        <Text style={styles.likedLabel}>{other} others</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.descriptionRow}>
                    <TouchableOpacity
                        onPress={navigateToFriendProfile.bind(this, navigation)}>
                        <Text style={styles.likedLabel}>{user?.name}</Text>
                    </TouchableOpacity>
                    <Text 
                        style={styles.description}
                        numberOfLines={1}>{description}</Text>
                </View>
                <TouchableOpacity style={styles.viewAllComments}>
                    <Text style={styles.viewAllCommentsLabel}>View all {totalComments} comments</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={navigateToFriendProfile.bind(this, navigation)}>
                        <Text style={styles.likedLabel}>{comments[0].user?.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.comment}>{comments[0].message}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={navigateToFriendProfile.bind(this, navigation)}>
                        <Text style={styles.likedLabel}>{comments[1].user?.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.comment}>{comments[1].message}</Text>
                </View>
                <View style={styles.addCommentRow}>
                    <TouchableOpacity
                        onPress={navigateToFriendProfile.bind(this, navigation)}>
                        <Image 
                            style={styles.userImage}
                            source={{uri: image}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.label2}>Add a comment...</Text>
                </View>
                <View style={styles.timeRow}>
                    <Text style={styles.time}>2 days ago</Text> 
                    <Text style={styles.translation}>See transalation</Text>
                </View>
            </View>
        )
    }

    render(){
        const {posts, navigation} = this.props;
        const {bottonSheetVisible} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatubarComponent />
                <View style={styles.header}>
                    <Text style={styles.title}>Instagram</Text>
                    <MaterialIcons 
                        name="expand-more"
                        color="black"
                        size={22}
                    />
                    <View style={styles.rightContainer}>
                        <TouchableOpacity
                            onPress={this.openButtonSheet}>
                            <Octicons 
                                name="diff-added"
                                size={22}
                                color="black"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.messageButton}>
                            <AntDesign 
                                name="message1"
                                size={22}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList 
                    data={posts}
                    renderItem={this.renderItem}
                />
                {bottonSheetVisible && <ProfileBottomSheet closeBottomSheet={this.closeBottomSheet} navigation={navigation}/>}
            </SafeAreaView>
        )
    }
}

export default connect(mapPropsToState)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 57,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 21
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    messageButton: {
        marginLeft: 30
    },
    image: {
        height: Dimensions.get('screen').height * .6,
        resizeMode: 'cover'
    },
    optionsContainer: {
        paddingHorizontal: 20,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row'
    },
    bookmark: {
        marginLeft: 'auto'
    },
    option: {
        marginRight: 25
    },
    likeRow: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {

    },
    otherLabel: {
        color: 'black',
        fontSize: 14,
    },
    likedLabel: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },
    descriptionRow: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    description: {
        color: 'black',
        fontSize: 14,
        flex: 1,
        marginLeft: 5
    },
    viewAllComments: {
        paddingHorizontal: 20,
    },
    viewAllCommentsLabel: {
        fontSize: 16
    },
    row: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3
    },
    comment: {
        marginLeft: 5
    },
    addCommentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    userImage: {
        height: 36,
        borderRadius: 20,
        width: 36
    },
    label2: {
        marginLeft: 10,
        // fontWeight: '500',
        color: 'gray'
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    time: {
        fontSize: 11,
        fontWeight: '500'
    },
    translation: {
        marginLeft: 8,
        fontSize: 11,
        color: 'black'
    },

    image2: {
        width: 17,
        height: 17,
        borderRadius: 17,
    },
    image2Container: {
        height: 20,
        width: 20,
        borderRadius: 20,
        borderColor: 'red',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -10,
        zIndex: 10
    }
})