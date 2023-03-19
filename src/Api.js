import axios from 'axios'

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization: 'Client-ID QK90PSDUMeUyuOahU00MFYa5lAIRvjDuNOy1CJnnZ-8'
      },
      params:{
        query: term
      }
    })
    debugger;
    return response.data.results;
  }

  export default searchImages;