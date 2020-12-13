import axios from 'axios'
import { Alert } from 'react-native';
import {Member} from '../interface/Member'

const url = 'http://10.0.2.2:8085'
export const fetchProduct = async () => {
  const path = url + '/api/products'
  const response = await axios.get(path);
  return response.data
};

export const fetchImagePath = (imagePath: string): string => {
  const path =  url + '/image/'
  return path + imagePath
}

export const createMember = (member: Member) => {
  console.log('create')
  axios.post(url + '/api/create', {
    email: 'abcdef@example.com',
    password: 1234
  }).then(() => {
    console.log('承認待ち')
  }).catch(() => {
    console.log('既に登録されているか、入力した値が不正です')
  })
}
