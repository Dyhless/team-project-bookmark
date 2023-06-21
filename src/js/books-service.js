import axios from 'axios';

export class BooksService {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  async fetchTopBooks() {
    return await axios.get(`${this.#BASE_URL}/top-books`).catch(console.error);
  }
}
