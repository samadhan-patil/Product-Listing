import axios from 'axios';

const wooApi = axios.create({
  baseURL: 'https://woocommerce.local/wp-json/wc/v3',
  auth: {
    username: 'ck_eff5694dfc337606188acd928d1ef2287f49e690',
    password: 'cs_e63a031e5f450e40567d9dcfe61dcfdaf6f11600'
  }
});

export const fetchProducts = async () => {
  try {
    const response = await wooApi.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
