import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    Button,
    Alert
 } from "react-native";

import { connect } from "react-redux"; 
import { Icon, Container, Header, Content, Left } from "native-base";
import settingScreen from './settingScreen';


 class homeScreen extends Component{
     static navigationOptions = {
         drawerIcon:(
             <Image source={require('../assets/logo/home.png')}
             style={{ height:24, width:24 }}/>
         )
     }
     _handlePress = (heroes) =>{
        console.log('props '+heroes.hero)
        this.props.navigation.navigate('Heroe', {
            hero: heroes.superhero
        })
     }

     _OnPress() {
        return Alert.alert(this.props.heroes)
     }

     getSuperHeroes() {
         const { superHeroes } = this.props
         return superHeroesData = superHeroes.map((heroes, key) => {
             console.log('====================================');
             console.log('heroes -> '+heroes.superhero);
             console.log('heroes -> '+heroes.publisher);
             console.log('====================================');
             return <Text onPress={ () =>{
                this.props.navigation.navigate('Heroe', {
                hero: heroes.superhero,
                company: heroes.publisher
                })
             } } key={key} style={styles.superH}>{heroes.superhero}</Text>
         })
     }
     render(){
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
                <Text style={styles.head}>Tu lista</Text>
                <View>
                    {this.getSuperHeroes()}
                </View>
                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Press Me"
                />
                </Content>
            </Container>
         )
     }
 }

 const mapStateToProps = state => {
    return { superHeroes: state.superHeroes }
 }
 
 export default connect(mapStateToProps)(homeScreen);

 const styles = StyleSheet.create({
    head:{
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
        fontSize: 34,
        marginTop: 50
    },
    superH: {
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
        backgroundColor: 'white',
        width:300,
        fontSize: 24
    }
 })

 