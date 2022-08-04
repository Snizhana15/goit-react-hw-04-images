import axios from 'axios';

const KEY = '27771322-fd7e9c7da20f52548d5baeacc';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const getImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export default getImages;
