import axios from 'axios';

export class BooksService {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';
  fetchTopBooks() {
    return axios
      .get(`${this.#BASE_URL}/top-books`)
      .then(response => response)
      .catch(console.error);
  }
}
