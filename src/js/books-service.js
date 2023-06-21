import axios from 'axios';

export class BooksService {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';
  bookID = null;

  async fetchTopBooks() {
    return await axios.get(`${this.#BASE_URL}/top-books`).catch(console.error);
  }

  async fetchBookById(id) {
    try {
      const response = await axios.get(`${this.#BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
