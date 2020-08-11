import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { StackNavigator,DrawerNavigator,TabNavigator} from 'react-navigation';

var DrawerMenu=require('./drawer/DrawerMenu');
var Feedback=require('./Feedback/Feedback');
var Dashboard=require('./Dashboard/Dashboard');
var Chat=require('./chat/Chat');
var Login=require('./login/Login');
var SignUp=require('./sign_up/SignUp');


const Tab = TabNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            tabBarLabel:"Login"

        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            tabBarLabel:"SignUp"

        }
    },




}, {
  tabBarOptions: {
    activeTintColor: '#88cc88',
    inactiveTintColor: '#aaaaaa',
    showIcon: true,
    scrollEnabled: false,
    indicatorStyle: {
      display: 'none',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
  tabBarPosition: 'bottom'
});



const ScreenList= StackNavigator({

  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
                             headerLeft:<TouchableOpacity onPress={() =>navigation.navigate('DrawerOpen')}><Image source={{uri: "menu"}} style={styles.menu_icon} /></TouchableOpacity>
        }),
  },
  Feedback: {
    screen: Feedback,

  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
                             headerLeft:<TouchableOpacity onPress={() =>navigation.navigate('DrawerOpen')}><Image source={{uri: "menu"}} style={styles.menu_icon} /></TouchableOpacity>
        }),
  },
  Tab: {
    screen: Tab,
    navigationOptions: {
       header:false,

  },

  },



},
{


  transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            });

            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });


            return { opacity, transform: [{ translateX }] }
        }
    })

}
);


const  Drawer = DrawerNavigator({

    Dashboard: {
    screen: ScreenList
    },

},

{
  drawerWidth:(Dimensions.get('window').width)-80,
  backBehavior: 'none',
  contentComponent: (props) =>  (<DrawerMenu navigation={props.navigation} drawerProps={{...props}}  />),

},);

export default App= StackNavigator(
{
  Tab: {
      screen: Tab,
      navigationOptions: {
         header:false,

   },

  },
  Drawer: {
      screen: Drawer,
      navigationOptions: {
         header:false,

   },

  },

},
{
initialRouteName: 'Tab',
statusBarHidden: true,
headerMode: 'screen',


});


const styles = StyleSheet.create({
  back_icon:{
      height: 20,
      width: 20,
      marginLeft:10,
  },
  menu_icon:{
      height: 30,
      width: 30,
      marginLeft:10,
  },
});

if(Platform === 'android')
{
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
