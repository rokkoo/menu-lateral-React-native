import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Alert
 } from "react-native";
 import { Icon, Container, Header, Content, Left } from "native-base";

 class superHeroe extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    }
     render(){
         const { goBack } = this.props.navigation;
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
                }}>
                <Button
                    onPress={()=>goBack()}
                    title = 'Atras'
                />
                <Text>{this.props.navigation.state.params.hero}</Text>
                <Text>Ventana de superHeroe</Text>
                </Content>
            </Container>         )
     }
 }

 export default superHeroe