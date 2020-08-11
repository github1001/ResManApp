import React, { Component } from 'react';
import { ScrollView,
 View,
 Text,
 StyleSheet,
 Image,
 TouchableOpacity,
 AsyncStorage,
 Alert,
 NetInfo,
 ActivityIndicator,
 Switch,
 I18nManager,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
class DrawerMenu extends Component {
   constructor(props) {
    super(props);
    this.state = {

    }
  }

  _navigateToScreen(routename)
  {

      const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: routename })],
          });
          this.props.navigation.dispatch(resetAction);
          //this.props.navigation.navigate("CompareScreen");
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{flex:2}}>
            </View>
            <TouchableOpacity style={styles.drawer_item} underlayColor='transparent' onPress={() => this._navigateToScreen('Dashboard')}>
                <View style={styles.drawer_item}>
                    <Text style={styles.drawer_text}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawer_item} underlayColor='transparent' onPress={() => this._navigateToScreen('Chat')}>
              <View style={styles.drawer_item}>
                    <Text style={styles.drawer_text}>Chat</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawer_item} underlayColor='transparent' onPress={() => this._navigateToScreen('Tab')}>

                  <View style={styles.drawer_item}>
                      <Text style={styles.drawer_text}>Logout</Text>
                  </View>
            </TouchableOpacity>
            <View style={styles.drawer_item}>
                <Text style={styles.drawer_text}>Add New Chat Group</Text>
            </View>
            <View style={styles.drawer_item}>
                <Text style={styles.drawer_text}>Update Password</Text>
            </View>
            <View style={{flex:2}}>
            </View>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
     flex:10,
     backgroundColor: '#ffffff',
     padding:10,
  },
  drawer_item:{
    flex:1,
    alignItems:'center',
  },
  drawer_text:{
      fontSize:20,
  },

});
module.exports=DrawerMenu;
