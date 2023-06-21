import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
let visiblePages = 2;

if (window.innerWidth > 768) {
  visiblePages = 3;
}

const options = {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: visiblePages,
};

const pagination = new Pagination(container, options);

pagination.getCurrentPage();
