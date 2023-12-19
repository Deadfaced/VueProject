import axios from 'axios';

export const fetchData = async (url, data = {}, method = 'get') => {
  try {
    const response = await axios({ url, method, data });
    return response.data;
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};