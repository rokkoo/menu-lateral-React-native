import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
 } from "react-native";


import { connect } from "react-redux"; 
 import { Icon, Button, Container, Header, Content, Left } from "native-base";
 class homeScreen extends Component{
     static navigationOptions = {
         drawerIcon:(
             <Image source={require('../assets/logo/home.png')}
             style={{ height:24, width:24 }}/>
         )
     }
     render(){
        console.log(this.props)
         return(
            <Container >
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
                <Text>Ventana de bienvenida</Text>
                </Content>
            </Container>
         )
     }
 }

 const mapStateToProps = state => {
    return { superHeroes: state.superHeroes }
 }
 
 export default connect(mapStateToProps)(homeScreen);