import axios from "axios";

export default class MovieService {
  static async getAll(limit, page) {
    const response = await axios.get('https://yts.mx/api/v2/list_movies.json', {
      params: {
        limit: limit,
        page: page
      }
    })
    console.log(response.data.data.movies)
    return response.data.data
  }

  static async getById(id) {
    const response = await axios.get(`https://yts.mx/api/v2/movie_details.json/`, {
      params: {
        movie_id: id
      }
    })
    return response.data.data
  }
}