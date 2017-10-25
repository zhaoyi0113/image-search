import axios from 'axios';

const apiKey = 'AIzaSyD8rLjUOQuVNkwVYRxclpk1Z1i8auijj1M';
const cx = '015923670062127816633:npuitytcpqy';

const QUERY_IMAGES = 'QUERY_IMAGES';

const queryImages = (query) => {
  console.log('query images ', query);
  return (dispatch) => {
    return axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&searchType=image`)
      .then((res) => {
        console.log('search result ', res);
        dispatch({ type: QUERY_IMAGES, images: res });
      });
  };
};

export default { QUERY_IMAGES, queryImages };
