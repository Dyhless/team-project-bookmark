export default function () {
  return {
    // Online stores icons
    appleBooksIconPath: new URL('../../images/shopping/apple-books.png', import.meta.url).href,

    bookShopIconPath: new URL('../../images/shopping/book-shop.png', import.meta.url).href,

    amazonIconPath: new URL('../../images/shopping/amazon.png', import.meta.url).href,

    // Empty list stub image
    emptyListStubImage: new URL('../../images/shopping/shoppingbook.png', import.meta.url).href,

    // SVG
    svgTrashIcon: new URL('../../images/sprite.svg', import.meta.url),
  };
}