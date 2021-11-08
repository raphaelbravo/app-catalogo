import axios from 'axios';

const baseUrl = 'https://api.raphaelbd.com';

interface IGET {
  page?: number;
  limit?: number;
  query?: string;
}
export class ProductAPI {
  static GET = async ({page = 1, limit = 5, query = ''}: IGET) => {
    const response = await axios.get(`${baseUrl}/products`, {
      headers: {'Content-Type': 'application/json'},
      params: {
        page,
        limit,
        query,
      },
    });
    return response.data;
  };
}
