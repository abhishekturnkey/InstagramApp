import { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { RNCamera } from 'react-native-camera';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class PhotoBottomTabScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            type: 'front',
            flashMode: 'off'
        }
        this.flashToggle = this.flashToggle.bind(this);
        this.rotateCamera = this.rotateCamera.bind(this);
        this.takePicture = this.takePicture.bind(this);
    }

    async componentDidMount(){
        try {
            // const result = await launchCamera(options);
        } catch (error) {
            console.log(error);
        }
    }

    flashToggle(){
        const {flashMode} = this.state;
        this.setState({flashMode: flashMode == "off" ? "on": "off"})
    }

    rotateCamera(){
        const {type} = this.state;
        this.setState({type: type == "front" ? "back": "front"})
    }

    async takePicture() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
    };

    render(){
        const {type, flashMode} = this.state;
        console.log("flashMode", flashMode)
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.cameraView}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={type == 'back' ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                        flashMode={flashMode == 'on'?  RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                    />
                    <TouchableOpacity
                        onPress={this.rotateCamera}
                        style={styles.rotate}>
                        <SimpleLineIcons 
                            name="refresh"
                            color="white"
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.flashToggle}
                        style={styles.flash}>
                        <Ionicons 
                            name={flashMode == "on" ? "flash" : "flash-off"}
                            color="white"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={this.takePicture} 
                        style={styles.button}>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cameraView: {
        flex: 1
    },
    bottomView: {
        flex: 1,   
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 20,
        borderColor: 'lightgray',
        alignSelf: 'center'
    },
    preview: {
        height: '60%'
    },
    rotate: {
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    flash: {
        position: 'absolute',
        right: 20,
        bottom: 10
    }
})