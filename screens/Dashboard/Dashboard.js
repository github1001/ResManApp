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
class Dashboard extends Component {
   constructor(props) {
    super(props);
    this.state = {

    }
  }

  static navigationOptions = ({navigation, screenProps}) => {
    const params = navigation.state.params || {};


     return {
         title:'Home',
         headerStyle:{ backgroundColor: '#ffffff'},
         headerTitleStyle:{color: '#000000',

        alignSelf: 'center',
        fontSize:18,},



     }
  }

_navigateToScreen(route)
{
  this.props.navigation.navigate(route);
}

  render() {
    return (
        <View style={styles.container}>
            <View style={{flex:3,flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1,borderWidth:0,borderColor:'grey',alignItems:'center',justifyContent:'center',marginRight:5}} underlayColor='transparent' onPress={() => this._navigateToScreen('Feedback')}>

                <View style={{flex:1,borderWidth:0,borderColor:'grey',alignItems:'center',justifyContent:'center',marginRight:5}}>
                    <Text style={styles.label_text}>Feedback</Text>
                    <View style={{marginTop:10}}>
                      <Image source={{uri:'feedback'}} resizeMode="contain"  style={{height:100,width:100}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
                <View style={{flex:1,borderWidth:0,borderColor:'grey',alignItems:'center',justifyContent:'center',marginLeft:5}}>
                    <Text style={styles.label_text}>Notice Board</Text>
                    <View style={{marginTop:10}}>
                      <Image source={{uri:'notice_board'}} resizeMode="contain"  style={{height:100,width:100}}></Image>
                    </View>

                </View>
            </View>
            <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri:'security'}} resizeMode="contain"  style={{height:150,width:150}}></Image>

            </View>
            <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'chat'}} resizeMode="contain"  style={{height:150,width:150}}></Image>
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
  label_text:{
    fontSize:18
  },

});
module.exports=Dashboard;
