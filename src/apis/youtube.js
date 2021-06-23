import axios from 'axios'

const KEY = 'AIzaSyD4k2Y4Xa6aXQ9fwFPUhLSXrgKgAsGJZAg';  


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});