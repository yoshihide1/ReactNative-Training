import React from 'react';
import {StyleSheet} from 'react-native'
import {Container, Content} from 'native-base';
import NavBar from '../components/NavBar';
import ItemList from '../components/ItemList';
import NavBarBottom from '../components/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <NavBar />
      <Content>
        <ItemList />
      </Content>
      <NavBarBottom />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
})
export default HomeScreen;
