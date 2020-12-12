import axios from 'axios'

export const fetchProduct = async () => {
  const url = 'http://10.0.2.2:8085/api/products';
  const response = await axios.get(url);
  return response.data
};

export const fetchImagePath = (imagePath: string): string => {
  const url = 'http://10.0.2.2:8085/image/'
  return url + imagePath
}
