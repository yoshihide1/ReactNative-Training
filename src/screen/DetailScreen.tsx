import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Content,
  CardItem,
  Card,
} from 'native-base';
import { Route } from '../interface/Routet';
import NavBarBottom from '../components/NavBarBottom';

const DetailsScreen = ({ route }: Route) => {
  const { name, price, description, image } = route.params;
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>商品名{name}</Text>
                <Text>値段{price}円</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                style={{ height: 300, width: '100%', flex: 1 }}
                source={{ uri: image }}
              />
              <Text>商品説明</Text>
              <Text>{description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Button rounded danger>
                <Icon name="logo-github" />
                <Text>カートに入れる</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <NavBarBottom />
    </Container>
  );
};

export default DetailsScreen;
