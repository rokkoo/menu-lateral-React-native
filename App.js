import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DrawerNavigator } from "react-navigation";

import homeScreen from "./screens/homeScreen";
import SettingScreen from "./screens/settingScreen";
import { Header, Container, Image, Body } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}


const CustomDrawerComponent = (props) => (
    <Container>
      <Header>
        <Body>
          <Image style={styles.drawerImage} source={require('./assets/logo.png')} />
        </Body>
      </Header>
    </Container>
)

const MyApp = DrawerNavigator({
  Home:{
    screen: homeScreen
  },
  Settings: {
    screen: SettingScreen
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
