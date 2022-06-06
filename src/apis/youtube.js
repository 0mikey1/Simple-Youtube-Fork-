import axios from 'axios';

const KEY = 'AIzaSyDe-EI66B4Lh4dik0bxm68SQ8vGKka2IiY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video', 
    maxResults: 5,
    key: KEY
  }
});
