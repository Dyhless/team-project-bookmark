function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=o.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){n[e]=o},o.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.4cc7b816.js","lGJMy":"plug-empte-book_335x485.3bc43583.png","3HCpm":"plug-empte-book_218x316.adc93518.png","6MBmZ":"plug-empte-book_180x256.b984b05b.png","e31Gs":"amazon_62x19.626c9508.png","8Rppq":"apple-book_33x32.9b2fbf78.png","kZ2io":"book-shop_38x36.1d091ebd.png","1XaNB":"index.9a265f83.css","a8cj2":"shopping-list.e7adc215.js"}'));var s=a("2shzp");class l{#e="https://books-backend.p.goit.global/books/";bookID=null;async fetchTopBooks(){return await s.default.get(`${this.#e}/top-books`).catch(console.error)}async fetchBookById(e){try{return(await s.default.get(`${this.#e}/${e}`)).data}catch(e){console.log(e.message)}}}var c=a("7Y9D8");const i=document.querySelector(".loader-backdrop");function r(){i.classList.add("is-hidden")}function d(){i.classList.remove("is-hidden")}const m=new l,u=document.querySelector(".top-books");var p;p=new URL(a("kyEFX").resolve("lGJMy"),import.meta.url).toString();var g;g=new URL(a("kyEFX").resolve("3HCpm"),import.meta.url).toString();var k;function b(){const e=window.innerWidth;return e<768?new URL(p):e<1440?new URL(g):new URL(k)}k=new URL(a("kyEFX").resolve("6MBmZ"),import.meta.url).toString(),async function(){const o=await async function(){try{const{data:e}=await m.fetchTopBooks();return e}catch(o){console.log(o),e(c).Notify.failure("Oops! Something went wrong... Please try again.")}}();let t="";for(const{list_name:e,books:n}of o){let o=`\n      <li>\n        <h3 class="name-category">${e}</h3>\n        <ul class="list-category">\n    `;for(let e=0;e<n.length;e+=1){const{_id:t,book_image:a,title:s,author:l}=n[e];o+=`\n        <li class="item-category-book js-book-modal" data-book-id="${t}">\n          <a class="link-books" href="#">\n            <div class="card-book">\n              <div class="img-card-book">\n                <img src="${a}" alt="book" class="img-book" loading="lazy" data-id="${t}" onerror="src='${b()}'"/>\n              </div>\n              <div class="bestsellers-text-wrapper">\n                <div class="title-wrap">\n                  <p class="title-book">${s}</p>\n                </div>\n                <div class="author-wrap">\n                  <p class="book-author">${l}</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </li>\n      `}o+='\n        </ul>\n        <button type="button" aria-label="See more" class="see-more">See more</button>\n      </li>\n    ',t+=o}if(u){u.innerHTML="",u.insertAdjacentHTML("beforeend",t);const e=document.querySelectorAll(".see-more"),n=document.querySelectorAll(".bookcat");for(let t=0;t<o.length;t++)e[t].addEventListener("click",(()=>{n[t+1].click(),window.scrollTo({top:0,behavior:"smooth"})}))}r()}(),a("ghT7p"),a("7Y9D8");const h=new l;var f;f=new URL(a("kyEFX").resolve("e31Gs"),import.meta.url).toString();var y;y=new URL(a("kyEFX").resolve("8Rppq"),import.meta.url).toString();var w;w=new URL(a("kyEFX").resolve("kZ2io"),import.meta.url).toString(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),cardModal:document.querySelector(".card-modal")};e.closeModalBtn.addEventListener("click",(function(){document.body.classList.remove("modal-open"),e.modal.classList.add("is-hidden-modal-book"),document.removeEventListener("keydown",l),window.addEventListener("click",s)}));let o="",t="",n="",a="";async function s(c){if(o=c.target.getAttribute("data-id"),null!==o){window.removeEventListener("click",s),document.body.classList.add("modal-open"),e.modal.classList.remove("is-hidden-modal-book"),document.addEventListener("keydown",l);try{const d=await h.fetchBookById(o),{book_image:m,description:u,author:p,title:g,buy_links:k}=d;k.forEach((e=>{"Amazon"===e.name?t=e.url:"Apple Books"===e.name?n=e.url:"Bookshop"===e.name&&(a=e.url)}));const b=document.querySelector(".js-add-to-list"),v=document.querySelector(".notify"),L=document.querySelector(".js-remove-from-list");b.addEventListener("click",(function(){r(o)?console.log("The book is already in the shopping list."):(S.push(d),localStorage.setItem(E,JSON.stringify(S)),i())})),L.addEventListener("click",(function(){S=S.filter((e=>e._id!==o)),localStorage.setItem(E,JSON.stringify(S)),i()}));const E="storage-of-books";let S=JSON.parse(localStorage.getItem(E))||[];function i(){r(o)?(b.classList.add("is-hidden"),L.classList.remove("is-hidden"),v.classList.remove("is-hidden")):(b.classList.remove("is-hidden"),L.classList.add("is-hidden"),v.classList.add("is-hidden"))}function r(e){return S.some((o=>o._id===e))}!function(o){e.cardModal.innerHTML=o}(`<img src="${m}" alt="book" class="card-img-modal">\n<h5 class="title">${g}</h5>\n<p class="author-card-modal">${p}</p>\n<p class="text-card-modal">${u}</p>\n<ul class="shops-modal">\n<li class="li-modal">\n<a href="${t}" target="_blank">\n<img class="amazon" src="${new URL(f)}" alt="Amazon"</a>\n</li>\n<li class="li-modal">\n  <a href="${n}" target="_blank">\n<img class="apple" src="${new URL(y)}" alt="Apple-book"></a>\n</li>\n<li class="li-modal">\n  <a href="${a}" target="_blank">\n<img class="book-shop" src="${new URL(w)}" alt="Book-shop"></a>\n</li>\n</ul>\n`),i()}catch(_){console.log(_)}}}function l(o){"backdrop-modal-book"!==o.target.className&&"Escape"!==o.code||(e.modal.classList.add("is-hidden-modal-book"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",l),window.addEventListener("click",s))}e.modal.addEventListener("click",l),window.addEventListener("click",s)})(),a("7tzR7");s=a("2shzp"),c=a("7Y9D8");const v=document.querySelector(".category"),L=document.querySelector(".container-books-card");v.insertAdjacentHTML("beforeend",'<ul class="categBook"></ul>');const E=document.querySelector(".categBook");async function S(o){d(),L.innerHTML="",document.querySelectorAll(".bookcat").forEach((e=>{e.classList.contains("current-page")&&e.classList.remove("current-page")}));document.querySelector(`li[value="${o}"]`).classList.add("current-page");try{const e=(await s.default.get(`https://books-backend.p.goit.global/books/category?category=${o}`)).data,t=document.createElement("h2");t.classList.add("selected-category-name");const n=o.split(" "),a=n.pop(),l=n.join(" ");t.innerHTML=`${l} <split class="last-word-category">${a}</split>`,L.appendChild(t);const c=document.createElement("ul");c.classList.add("selected-category"),L.appendChild(c);const i=document.querySelector(".selected-category");e.forEach((e=>{const o=document.createElement("li");o.classList.add("book-card-preview");const t=`<div class="book-preview-container"">\n                          <div class="book-image">\n                            <img src="${e.book_image}" class="img-book" alt="book-title-preview" \n                            loading="lazy" onerror="src='${function(){const e=window.innerWidth;return e<768?new URL(p):e<1440?new URL(g):new URL(k)}()}'" data-id="${e._id}">\n                          </div>\n                        <div>\n                          <h2 class="book-title">${e.title}</h2>\n                          <p class="book-author">${e.author}</p>\n                        </div></div>`;o.innerHTML=t,i.appendChild(o)})),r()}catch(o){e(c).Notify.failure("Oops! Something went wrong... Please try again."),r()}}window.addEventListener("load",(async function(){d();try{const e=await s.default.get("https://books-backend.p.goit.global/books/category-list"),o=e.data.sort(((e,o)=>e.list_name.localeCompare(o.list_name))),t=document.createElement("li");t.classList.add("bookcat","allBooks"),t.classList.add("current-page"),t.textContent="All categories",E.appendChild(t);document.querySelector(".allBooks").addEventListener("click",(()=>{window.location.href="index.html"})),o.forEach((e=>{const o=document.createElement("li");o.classList.add("bookcat"),o.setAttribute("value",e.list_name),E.appendChild(o),o.innerHTML=e.list_name,o.addEventListener("click",(()=>{S(e.list_name)}))}))}catch(e){console.log(e),r()}}));const _=document.querySelector(".scroll-up");_.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-50),setTimeout(e,0))})),window.addEventListener("scroll",(function(){const e=window.pageYOffset,o=document.documentElement.clientHeight;_.style.display=e>o?"flex":"none"})),a("32KOn"),a("hTr2X"),a("cyM2s"),a("444Bz"),a("hW4wb");
//# sourceMappingURL=index.4cc7b816.js.map
