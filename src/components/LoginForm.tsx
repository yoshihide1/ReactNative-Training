import React from 'react'
import { Content, Form, Input, Item, Label, Text, Button } from 'native-base'
import LoginScreen from '../screen/LoginScreen'
import { StyleSheet } from 'react-native'
import {createMember} from '../components/Fetch'

const LoginForm = () => {
  return (
    <Content>
      <Form>
        <Label>メールアドレス</Label>
        <Item>
          <Input style={styles.input} />
        </Item>
        <Label>パスワード</Label>
        <Item>
          <Input />
          <Button full onPress={()=> createMember()}><Text>新規登録</Text></Button>
        </Item>
      </Form>
    </Content>
  )
}
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'green'
  }
})
export default LoginForm