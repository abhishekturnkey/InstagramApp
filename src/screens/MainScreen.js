import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import SearchScreen from './SearchScreen';
import ReelsScreen from './ReelsScreen';
import NotificationScreen from './NotificationScreen';



const Tab = createBottomTabNavigator();

export function MainScreen(){
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60
                }
            }}>
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons 
                            size={24}
                            color="black"
                            name={focused ? 'home': 'home-outline'}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={SearchScreen} 
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons 
                            size={30}
                            color="black"
                            name={focused ? 'search': 'search-outline'}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="ReelsScreen" 
                component={ReelsScreen}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons 
                            size={30}
                            color="black"
                            name={focused ? 'play-circle': 'play-circle-outline'}
                        />
                    )
                }} 
            />
            <Tab.Screen 
                name="NotificationScreen" 
                component={NotificationScreen} 
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons 
                            size={30}
                            color="black"
                            name={focused ? 'heart': 'heart-outline'}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="ProfileScreen" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Image 
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: 20,
                            }}
                            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'}}
                        />
                    )
                }} 
            />
        </Tab.Navigator>
    )
}