function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=o.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.bbeb319c.js","lGJMy":"plug-empte-book_335x485.3bc43583.png","3HCpm":"plug-empte-book_218x316.adc93518.png","6MBmZ":"plug-empte-book_180x256.b984b05b.png","e31Gs":"amazon_62x19.626c9508.png","8Rppq":"apple-book_33x32.9b2fbf78.png","kZ2io":"book-shop_38x36.1d091ebd.png","1XaNB":"index.b7acb4b9.css","a8cj2":"shopping-list.e3cea9f0.js"}'));var l=a("2shzp");class s{#e="https://books-backend.p.goit.global/books/";async fetchTopBooks(){return await l.default.get(`${this.#e}/top-books`).catch(console.error)}}var c=a("7Y9D8");const i=document.querySelector(".loader-backdrop");function r(){i.classList.add("is-hidden")}function d(){i.classList.remove("is-hidden")}const m=new s,u=document.querySelector(".top-books");var p;p=new URL(a("kyEFX").resolve("lGJMy"),import.meta.url).toString();var g;g=new URL(a("kyEFX").resolve("3HCpm"),import.meta.url).toString();var k;function b(){const e=window.innerWidth;return e<768?new URL(p):e<1440?new URL(g):new URL(k)}k=new URL(a("kyEFX").resolve("6MBmZ"),import.meta.url).toString(),async function(){const o=await async function(){try{const{data:e}=await m.fetchTopBooks();return e}catch(o){console.log(o),e(c).Notify.failure("Oops! Something went wrong... Please try again.")}}();let t="";for(const{list_name:e,books:n}of o){let o=`\n      <li>\n        <h3 class="name-category">${e}</h3>\n        <ul class="list-category">\n    `;for(let e=0;e<n.length;e+=1){const{_id:t,book_image:a,title:l,author:s}=n[e];o+=`\n        <li class="item-category-book js-book-modal" data-book-id="${t}">\n          <a class="link-books" href="#">\n            <div class="card-book">\n              <div class="img-card-book">\n                <img src="${a}" alt="book" class="img-book" loading="lazy" data-id="${t}" onerror="src='${b()}'"/>\n              </div>\n              <div class="bestsellers-text-wrapper">\n                <div class="title-wrap">\n                  <p class="title-book">${l}</p>\n                </div>\n                <div class="author-wrap">\n                  <p class="book-author">${s}</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </li>\n      `}o+='\n        </ul>\n        <button type="button" aria-label="See more" class="see-more">See more</button>\n      </li>\n    ',t+=o}if(u){u.innerHTML="",u.insertAdjacentHTML("beforeend",t);const e=document.querySelectorAll(".see-more"),n=document.querySelectorAll(".bookcat");for(let t=0;t<o.length;t++)e[t].addEventListener("click",(()=>{n[t+1].click(),window.scrollTo({top:0,behavior:"smooth"})}))}r()}(),a("ghT7p"),a("72erS"),a("7Y9D8");const f=new s;var h;h=new URL(a("kyEFX").resolve("e31Gs"),import.meta.url).toString();var y;y=new URL(a("kyEFX").resolve("8Rppq"),import.meta.url).toString();var w;w=new URL(a("kyEFX").resolve("kZ2io"),import.meta.url).toString(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),cardModal:document.querySelector(".card-modal")};e.closeModalBtn.addEventListener("click",(function(){document.body.classList.remove("modal-open"),e.modal.classList.add("is-hidden-modal-book"),document.removeEventListener("keydown",s),window.addEventListener("click",l)}));let o="",t="",n="",a="";async function l(c){if(o=c.target.getAttribute("data-id"),null!==o){window.removeEventListener("click",l),document.body.classList.add("modal-open"),e.modal.classList.remove("is-hidden-modal-book"),document.addEventListener("keydown",s);try{const l=await f.fetchBookById(o),{book_image:s,description:c,author:i,title:r,buy_links:d}=l;d.forEach((e=>{"Amazon"===e.name?t=e.url:"Apple Books"===e.name?n=e.url:"Bookshop"===e.name&&(a=e.url)}));document.querySelector(".js-add-to-list").addEventListener("click",(function(){if(function(e){let o=localStorage.getItem(m);return!!o&&JSON.parse(o).some((o=>o._id===e))}(l._id))console.log("The book is already in the shopping list.");else{let e=localStorage.getItem(m),o=[];e&&(o=JSON.parse(e)),o.push(l),localStorage.setItem(m,JSON.stringify(o))}}));const m="storage-of-books";!function(o){e.cardModal.innerHTML=o}(`<img src="${s}" alt="book" class="card-img-modal">\n<h5 class="title">${r}</h5>\n<p class="author-card-modal">${i}</p>\n<p class="text-card-modal">${c}</p>\n\n<ul class="shops-modal">\n<li class="li-modal">\n<a href="${t}" target="_blank">\n<img class="amazon" src="${new URL(h)}" alt="Amazon"</a>\n</li>\n<li class="li-modal">\n  <a href="${n}" target="_blank">\n<img class="apple" src="${new URL(y)}" alt="Apple-book"></a>\n</li>\n<li class="li-modal">\n  <a href="${a}" target="_blank">\n<img class="book-shop" src="${new URL(w)}" alt="Book-shop"></a>\n</li>\n</ul>\n</div>\n`)}catch(e){console.log(e)}}}function s(o){"backdrop-modal-book"!==o.target.className&&"Escape"!==o.code||(e.modal.classList.add("is-hidden-modal-book"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",s),window.addEventListener("click",l))}e.modal.addEventListener("click",s),window.addEventListener("click",l)})(),a("7tzR7");l=a("2shzp"),c=a("7Y9D8");const v=document.querySelector(".category"),L=document.querySelector(".container-books-card");v.insertAdjacentHTML("beforeend",'<ul class="categBook"></ul>');const E=document.querySelector(".categBook");async function _(o){d(),L.innerHTML="",document.querySelectorAll(".bookcat").forEach((e=>{e.classList.contains("current-page")&&e.classList.remove("current-page")}));document.querySelector(`li[value="${o}"]`).classList.add("current-page");try{const e=(await l.default.get(`https://books-backend.p.goit.global/books/category?category=${o}`)).data,t=document.createElement("h2");t.classList.add("selected-category-name");const n=o.split(" "),a=n.pop(),s=n.join(" ");t.innerHTML=`${s} <split class="last-word-category">${a}</split>`,L.appendChild(t);const c=document.createElement("ul");c.classList.add("selected-category"),L.appendChild(c);const i=document.querySelector(".selected-category");e.forEach((e=>{const o=document.createElement("li");o.classList.add("book-card-preview");const t=`<div class="book-preview-container""><div class="book-image">\n      <img src="${e.book_image}" class="img-book" alt="book-title-preview" loading="lazy" onerror="src='${function(){const e=window.innerWidth;return e<768?new URL(p):e<1440?new URL(g):new URL(k)}()}'" data-id="${e._id}">\n                        </div>\n                        <div>\n                          <h2 class="book-title">${e.title}</h2>\n                          <p class="book-author">${e.author}</p>\n                        </div></div>`;o.innerHTML=t,i.appendChild(o)})),r()}catch(o){e(c).Notify.failure("Oops! Something went wrong... Please try again."),r()}}window.addEventListener("load",(async function(){d();try{const e=await l.default.get("https://books-backend.p.goit.global/books/category-list"),o=e.data.sort(((e,o)=>e.list_name.localeCompare(o.list_name))),t=document.createElement("li");t.classList.add("bookcat","allBooks"),t.classList.add("current-page"),t.textContent="All categories",E.appendChild(t);document.querySelector(".allBooks").addEventListener("click",(()=>{window.location.href="index.html"})),o.forEach((e=>{const o=document.createElement("li");o.classList.add("bookcat"),o.setAttribute("value",e.list_name),E.appendChild(o),o.innerHTML=e.list_name,o.addEventListener("click",(()=>{_(e.list_name)}))}))}catch(e){console.log(e),r()}}));const S=document.querySelector(".scroll-up");S.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-50),setTimeout(e,0))})),window.addEventListener("scroll",(function(){const e=window.pageYOffset,o=document.documentElement.clientHeight;S.style.display=e>o?"flex":"none"})),a("32KOn"),a("hTr2X"),a("cyM2s"),a("444Bz"),a("hW4wb");
//# sourceMappingURL=index.bbeb319c.js.map
