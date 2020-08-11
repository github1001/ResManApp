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
 Button,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
class Feedback extends Component {
   constructor(props) {
    super(props);
    this.state = {

    }
  }
  static navigationOptions = ({navigation, screenProps}) => {
    const params = navigation.state.params || {};


     return {
         title:'Feedback',
         headerStyle:{ backgroundColor: '#00a8d4'},
         headerTitleStyle:{color: '#000000',

        alignSelf: 'center',
        fontSize:18,},



     }
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center',flex:8}}>

            </View>
            <View style={{flex:1}}>
            <Button

                title="Add New"
                color="grey"

              />
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

});
module.exports=Feedback;
