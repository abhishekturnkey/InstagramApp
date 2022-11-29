import { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Image, FlatList, View, Dimensions, TouchableOpacity } from "react-native";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

const supportedMimeTypesByTheBackEnd = [
    'image/jpeg',
    'image/png',
    'image/heif',
    'image/heic',
    'image/heif-sequence',
    'image/heic-sequence',
  ];

export class GalleryBottomTabScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            photos: [],
            selectedImage: ''
        }
        this.renderItem = this.renderItem.bind(this);
    }

    async componentDidMount(){
        try {
            
            const {edges, page_info} = await CameraRoll.getPhotos({
                first: 20000,
                       assetType: 'Photos',
                       mimeTypes: supportedMimeTypesByTheBackEnd
                });
            this.setState({photos: edges, selectedImage: edges[0]?.node?.image?.uri})
        } catch (error) {
            console.log(error)
        }
    }

    selectImage(uri){
        this.setState({selectedImage: uri});
    }

    renderItem({item}){
        const uri = item?.node?.image?.uri
        return (
            <TouchableOpacity 
                style={styles.item}
                onPress={this.selectImage.bind(this, uri)}>
                <Image
                    source={{uri: uri}}
                    style={styles.image}
                />
            </TouchableOpacity>
        )
    }

    render(){
        const {photos, selectedImage} = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <Image 
                    style={styles.selectedImage}
                    source={{uri: selectedImage || null}}
                    // source={}
                />
                <FlatList
                    numColumns={3}
                    data={photos}
                    renderItem={this.renderItem}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    ItemSeparatorComponent={() => <View style={styles.seperator}/>}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    selectedImage: {
        height: '50%',
        resizeMode: 'cover',
        // aspectRatio: 4/5
    },
    image: {
        width: Dimensions.get('screen').width / 3 - 2,
        height: 200
    },
    item: {

    },
    seperator: {
        height: 3
    }
})