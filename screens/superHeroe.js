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
                    flexDirection: 'column',
                }}>
                <Text tyle={styles.back}>
                    <Button
                        onPress={()=>goBack()}
                        title = 'Atras'
                    />
                </Text>
                <View style={styles.container}>
                    <Text style={styles.content}>{this.props.navigation.state.params.hero}</Text>
                    <Text style={styles.content}>{this.props.navigation.state.params.company}</Text>
                </View>
                <Text>Ventana de superHeroe</Text>
                </Content>
            </Container>         
        )
     }
 }

 const styles = new StyleSheet.create({
     container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'red',
    },
     back: {
         flexDirection: 'row'
     }
 })


 export default superHeroe