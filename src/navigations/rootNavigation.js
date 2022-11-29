import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '../screens/EditProfileScreen';
import FriendProfile from '../screens/FriendProfile';
import HomeScreen from '../screens/HomeScreen';
import { MainScreen } from '../screens/MainScreen';
import PostPickerScreen from '../screens/PostPickerScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignupScreen from '../screens/SignupScreen';
import SignInScreen from '../screens/SingInScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='SignupScreen'>
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen} 
                />
                <Stack.Screen 
                    name='MainScreen'
                    component={MainScreen}
                />
                <Stack.Screen 
                    name="ProfileScreen" 
                    component={ProfileScreen} 
                />
                <Stack.Screen 
                    name="EditProfileScreen" 
                    component={EditProfileScreen} 
                />
                <Stack.Screen 
                    name="SignInScreen" 
                    component={SignInScreen} 
                />
                <Stack.Screen 
                    name="FriendProfile" 
                    component={FriendProfile} 
                />
                <Stack.Screen 
                    name="SignupScreen" 
                    component={SignupScreen} 
                />
                <Stack.Screen 
                    name='PostPickerScreen'
                    component={PostPickerScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}