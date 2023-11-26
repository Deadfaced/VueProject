import axios from 'axios';

export const fetchData = async () => {
  try {
    const [titleResponse, imageResponse] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts/1'),// JSONPlaceholder API
      axios.get('https://picsum.photos/200/300') // Lorem Picsum
    ]);

    return {
      title: titleResponse.data.title,
      description: titleResponse.data.body,
      imageUrl: imageResponse.request.responseURL,
    };
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
    throw error;
  }
};
