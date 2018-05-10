import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    AsyncStorage
 } from "react-native";

 import { Icon, Container, Header, Content, Left } from "native-base";

 import Expo from 'expo';

 class login extends Component{
    static navigationOptions = {
        drawerIcon:(
            <Image source={ require('../assets/logo/settings.png') }
            style={{ height:24, width:24 }}/>
        )
    }
    
    //Login
    async signInWithGoogleAsync() {
        try {
          const result = await Expo.Google.logInAsync({
            //ndroidClientId: YOUR_CLIENT_ID_HERE,
            iosClientId: '128925080638-upsktq0h6bsguvkiq5t2ui68oalf2c9v.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            AsyncStorage.setItem('user', JSON.stringify(result.user))
            .then(() => {
                    return this.props.navigation.navigate('Home')
                })
          } else {
            return {cancelled: true};
          }
        } catch(e) {
          return {error: true};
        }
      }

     render(){
         return(
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={() =>
                        this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Button
                onPress= {this.signInWithGoogleAsync.bind(this)}
                title='Logearte con google'
                />
                </Content>
            </Container>
         )
     }
 }

 export default login;