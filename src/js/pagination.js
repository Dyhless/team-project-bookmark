import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 2,
};
const pagination = new Pagination(container, options);

pagination.getCurrentPage();
