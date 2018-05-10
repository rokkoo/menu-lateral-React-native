import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage
 } from "react-native";

 import { Icon, Button, Container, Header, Content, Left } from "native-base";

 class settingScreen extends Component{
    static navigationOptions = {
        drawerIcon:(
            <Image source={ require('../assets/logo/settings.png') }
            style={{ height:24, width:24 }}/>
        )
    }

    getUser = async () => {
        try {
            let user = await AsyncStorage.getItem('user')
            let userParsed = JSON.parse(user)
            console.log('Current user ->'+userParsed.name);
            return <Text>{userParsed.name}</Text>            
        } catch (error) {
            
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
                <Text>Menú de ajustes</Text>
                </Content>
            </Container>
         )
     }
 }

 export default settingScreen;