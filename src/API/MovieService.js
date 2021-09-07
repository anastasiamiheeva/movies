import axios from "axios";

export default class MovieService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get('https://yts.mx/api/v2/list_movies.json', {
      params: {
        limit: limit,
        page_number: page,
      }
    })
    console.log(response)
    // return response.data.data.movies 
    return response.data.data
  }
}