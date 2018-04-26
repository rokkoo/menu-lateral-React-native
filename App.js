import React from 'react';
import { StyleSheet, Text, View, Image,Platform } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { DrawerNavigator, DrawerItems, StackNavigator } from "react-navigation";
import { Header, Container, Body, Content } from 'native-base';

import homeScreen from "./screens/homeScreen";
import SettingScreen from "./screens/settingScreen";
import heroe from "./screens/superHeroe";


import Reducers from "./src/reducers";


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore(Reducers) }>
        <MyApp />
      </Provider>
    );
  }
}

const logo = './assets/logo.png'

const CustomDrawerComponent = (props) => (
    <Container>
      <Header style={{ height:200, backgroundColor:'white' }}>
        <Body>
          <Image style={styles.drawerImage} source={require('./assets/logo/logo.png')} />
        </Body>
      </Header>
      <Content>
        <DrawerItems
         {...props}
         />
      </Content>
    </Container>
)


const MyApp = DrawerNavigator({
  Home:{
    screen: homeScreen
  },
  Settings: {
    screen: SettingScreen
  },
  Heroe:{
    screen: heroe
  }
  },{
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRouter: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
          backgroundColor: 'red',
          fontFamily: 'Cochin'
        },
        android: {
          backgroundColor: 'blue',
          fontFamily: 'Roboto'
        },            
   }),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    drawerImage:{
      height:150,
      width:150,
      borderRadius: 75,
    },
});
