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
 FlatList,
 TextInput
} from 'react-native';

import * as firebase from 'firebase';
import relativeDate from 'relative-date'
import { NavigationActions } from 'react-navigation';

class Chat extends Component {
   constructor(props) {
    super(props);
    this.state = {
      arrTempActivity:[],
      arrMainActivity:[],
        message:'',

    }

  }
  static navigationOptions = ({navigation, screenProps}) => {
    const params = navigation.state.params || {};


     return {
         title:'Chat',
         headerStyle:{ backgroundColor: '#ffffff'},
         headerTitleStyle:{color: '#000000',

        alignSelf: 'center',
        fontSize:18,},



     }
  }
  componentDidMount() {
         this._getMessageData();

}

_getMessageData()
{
  firebase.database().ref('Messages').limitToLast(10).on('value', (data) => {
    var messages = data.val();
    console.log("Snapshot",messages);
    var keys = Object.keys(messages);
    console.log("data",(messages[keys[0]]).text);
    if(keys.length>0)
         {
           for(var i=0;i<keys.length;i++)
           {
               this.state.arrTempActivity.push(messages[keys[i]])
               if(i===keys.length-1)
               {
                 this.setState({
                   arrMainActivity:this.state.arrTempActivity
                 })

                 setTimeout(()=>{
                     console.log("Final Main Data is:",this.state.arrMainActivity);
                 },700)
               }
           }

         }
  })
}
  // <FlatList
  //   ref={(c) => { this.flatList = c }}
  //   style={styles.container}
  //   contentContainerStyle={contentContainerStyle}
  //   data={data}
  //   keyExtractor={item => item.time}
  //   renderItem={this.renderItem}
  //   getItemLayout={this.itemLayout}
  //   ListEmptyComponent={this.emptyList}
  //   inverted />
_sendMessage()
{
  if(this.state.message!=='')
  {
    let currentUser = firebase.auth().currentUser
    let createdAt = new Date().getTime()
    let chatMessage = {
      text: this.state.message,
      createdAt: createdAt,
      user: {
        id: currentUser.uid,
        email: currentUser.email
      }
    }
    firebase.database().ref('Messages').push().set(chatMessage, (error) => {
      if (error) {
        console.log("Send message error",error);

      } else {
          this._getMessageData();
      }
    })
   }
//Alert.alert("Chat","Under Implementation");
}
  render() {

    return (
        <View style={styles.container}>
        <View style={{flex:9}}>
        <FlatList
                        data={this.state.arrMainActivity}
                        keyExtractor={(item,index) => item.createdAt}
                        renderItem={({ item }) => (
                          <View
                            style={styles.containerItem}>
                            <View
                              style={ [styles.bubbleView, {alignItems: 'flex-end'}, 10] }>
                              <Text
                                style={styles.userText} >
                                {relativeDate(new Date(item.createdAt)) + ' - ' + item.user.email}
                              </Text>
                              <Text
                                style={styles.messageText}>
                                {item.text}
                              </Text>
                            </View>
                          </View>

                        )}

                      />
          </View>
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:0.8}}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'message'}
                  returnKeyType='send'
                  onChangeText={(text) => {
                                      this.setState({message: text.trim()})
                                  }}
                                  value={this.state.message}
                  underlineColorAndroid={'transparent'}
                 />
            </View>
            <View style={{flex:0.2}}>
              <TouchableOpacity style={styles.button}  onPress={() => this._sendMessage()}>


                <Image source={{uri:'ic_send'}} style={{height:30,width:30}} />

              </TouchableOpacity>
            </View>
        </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee'
  },
  flatlistContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  placeholder: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center'
  },
  containerItem: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 5
  },
  bubbleView: {
    backgroundColor: '#1E90FF',
    flex: 1,
    borderRadius: 8,
    padding:8
  },
  userText: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold'
  },
  messageText: {
    flex: 1,
    color: 'blue',
    fontSize: 16
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3
  },
  button: {
    flexShrink: 0,
    width: 40,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center'
  }

});
module.exports=Chat;
