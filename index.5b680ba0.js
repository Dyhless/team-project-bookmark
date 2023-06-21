!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.5b680ba0.js","7mj2y":"plug-empte-book_335x485.3bc43583.png","jPeva":"plug-empte-book_218x316.adc93518.png","gB8wt":"plug-empte-book_180x256.b984b05b.png","jQaHS":"amazon_62x19.626c9508.png","51pAD":"apple-book_33x32.9b2fbf78.png","3fT1R":"book-shop_38x36.1d091ebd.png","1XaNB":"index.225906ef.css","01IoP":"shopping-list.9120df98.js"}'));var r=a("bpxeT"),c=a("2TvXO"),s=(r=a("bpxeT"),a("8MBJY")),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var n=i.default(e,t,"get");return d.default(e,n)};var i=u(a("1UHsN")),d=u(a("ffZzF"));function u(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){m.default(e,t),t.set(e,n)};var f,m=(f=a("5k7tO"))&&f.__esModule?f:{default:f};var v=a("a2hTj"),g=a("hKHmD"),b=(c=a("2TvXO"),a("dIxxU")),h=new WeakMap,k=function(){"use strict";function t(){e(s)(this,t),e(p)(this,h,{writable:!0,value:"https://books-backend.p.goit.global/books/"}),e(g)(this,"bookID",null)}return e(v)(t,[{key:"fetchTopBooks",value:function(){var t=this;return e(r)(e(c).mark((function n(){return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.default.get("".concat(e(l)(t,h),"/top-books")).catch(console.error);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},{key:"fetchBookById",value:function(t){var n=this;return e(r)(e(c).mark((function o(){var a;return e(c).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,b.default.get("".concat(e(l)(n,h),"/").concat(t));case 3:return a=o.sent,o.abrupt("return",a.data);case 7:o.prev=7,o.t0=o.catch(0),console.log(o.t0.message);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()}}]),t}(),w=a("6JpON"),y=document.querySelector(".loader-backdrop");function L(){y.classList.add("is-hidden")}function _(){y.classList.remove("is-hidden")}var x=new k,E=document.querySelector(".top-books");function S(){return H.apply(this,arguments)}function H(){return(H=e(r)(e(c).mark((function t(){var n;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.fetchTopBooks();case 3:return n=t.sent.data,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),e(w).Notify.failure("Oops! Something went wrong... Please try again.");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var O;O=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("7mj2y");var T;T=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("jPeva");var q;function B(){var e=window.innerWidth;return e<768?new URL(O):e<1440?new URL(T):new URL(q)}function R(){return(R=e(r)(e(c).mark((function t(){var n,o,a,r,s,l,i,d,u,p,f,m,v,g,b,h,k,w,y,_;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:for(n=e.sent,o="",a=!0,r=!1,s=void 0,e.prev=5,l=n[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){for(d=i.value,u=d.list_name,p=d.books,f='\n      <li>\n        <h3 class="name-category">'.concat(u,'</h3>\n        <ul class="list-category">\n    '),m=0;m<p.length;m+=1)v=p[m],g=v._id,b=v.book_image,h=v.title,k=v.author,f+='\n        <li class="item-category-book js-book-modal" data-book-id="'.concat(g,'">\n          <a class="link-books" href="#">\n            <div class="card-book">\n              <div class="img-card-book">\n                <img src="').concat(b,'" alt="book" class="img-book" loading="lazy" data-id="').concat(g,'" onerror="src=\'').concat(B(),'\'"/>\n              </div>\n              <div class="bestsellers-text-wrapper">\n                <div class="title-wrap">\n                  <p class="title-book">').concat(h,'</p>\n                </div>\n                <div class="author-wrap">\n                  <p class="book-author">').concat(k,"</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </li>\n      ");o+=f+='\n        </ul>\n        <button type="button" aria-label="See more" class="see-more">See more</button>\n      </li>\n    '}e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),r=!0,s=e.t0;case 13:e.prev=13,e.prev=14,a||null==l.return||l.return();case 16:if(e.prev=16,!r){e.next=19;break}throw s;case 19:return e.finish(16);case 20:return e.finish(13);case 21:if(E)for(E.innerHTML="",E.insertAdjacentHTML("beforeend",o),w=document.querySelectorAll(".see-more"),y=document.querySelectorAll(".bookcat"),_=0;_<n.length;_++)w[_].addEventListener("click",(function(){y[_+1].click(),window.scrollTo({top:0,behavior:"smooth"})}));L();case 23:case"end":return e.stop()}}),t,null,[[5,9,13,21],[14,,16,20]])})))).apply(this,arguments)}q=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gB8wt"),function(){R.apply(this,arguments)}(),a("32ZrB"),a("ax6eO");r=a("bpxeT"),c=a("2TvXO");a("6JpON");var A,M=new k;A=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("jQaHS");var N;N=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("51pAD");var U;U=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("3fT1R"),function(){var t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),cardModal:document.querySelector(".card-modal")};t.closeModalBtn.addEventListener("click",(function(){document.body.classList.remove("modal-open"),t.modal.classList.add("is-hidden-modal-book"),document.removeEventListener("keydown",f),window.addEventListener("click",l)}));var n="",o="",a="",s="";function l(e){return i.apply(this,arguments)}function i(){return(i=e(r)(e(c).mark((function t(r){var l,i,f,m,v,g,b,h,k;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b=function(e){var t=localStorage.getItem(g);return!!t&&JSON.parse(t).some((function(t){return t._id===e}))},h=function(){if(b(l._id))console.log("The book is already in the shopping list.");else{var e=localStorage.getItem(g),t=[];e&&(t=JSON.parse(e)),t.push(l),localStorage.setItem(g,JSON.stringify(t)),console.log("Congratulations! You have added the book to the shopping list.")}},null!==(n=r.target.getAttribute("data-id"))){e.next=7;break}return e.abrupt("return");case 7:p();case 8:return console.log("это айди",n),e.prev=9,e.next=12,M.fetchBookById(n);case 12:l=e.sent,console.log("book",l),i=l.book_image,f=l.description,m=l.author,v=l.title,d(l.buy_links),document.querySelector(".js-add-to-list").addEventListener("click",h),g="storage-of-books",k='<img src="'.concat(i,'" alt="book" class="card-img-modal">\n<h5 class="title">').concat(v,'</h5>\n<p class="author-card-modal">').concat(m,'</p>\n<p class="text-card-modal">').concat(f,'</p>\n<ul class="shops-modal">\n<li class="li-modal">\n<a href="').concat(o,'" target="_blank">\n<img class="amazon" src="').concat(new URL(A),'" alt="Amazon"</a>\n</li>\n<li class="li-modal">\n  <a href="').concat(a,'" target="_blank">\n<img class="apple" src="').concat(new URL(N),'" alt="Apple-book"></a>\n</li>\n<li class="li-modal">\n  <a href="').concat(s,'" target="_blank">\n<img class="book-shop" src="').concat(new URL(U),'" alt="Book-shop"></a>\n</li>\n</ul>\n'),console.log("markup",k),u(k),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(9),console.log(e.t0);case 29:case"end":return e.stop()}}),t,null,[[9,26]])})))).apply(this,arguments)}function d(e){e.forEach((function(e){"Amazon"===e.name?o=e.url:"Apple Books"===e.name?a=e.url:"Bookshop"===e.name&&(s=e.url)}))}function u(e){t.cardModal.innerHTML=e}function p(){window.removeEventListener("click",l),document.body.classList.add("modal-open"),t.modal.classList.remove("is-hidden-modal-book"),document.addEventListener("keydown",f)}function f(e){"backdrop-modal-book"!==e.target.className&&"Escape"!==e.code||(t.modal.classList.add("is-hidden-modal-book"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",f),window.addEventListener("click",l))}t.modal.addEventListener("click",f),window.addEventListener("click",l)}(),a("8Veln");r=a("bpxeT"),c=a("2TvXO"),b=a("dIxxU"),w=a("6JpON");var j=document.querySelector(".category"),C=document.querySelector(".container-books-card");j.insertAdjacentHTML("beforeend",'<ul class="categBook"></ul>');var J=document.querySelector(".categBook");function F(){var e=window.innerWidth;return e<768?new URL(O):e<1440?new URL(T):new URL(q)}function z(e){return P.apply(this,arguments)}function P(){return(P=e(r)(e(c).mark((function t(n){var o,a,r,s,l,i,d,u;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(),C.innerHTML="",document.querySelectorAll(".bookcat").forEach((function(e){e.classList.contains("current-page")&&e.classList.remove("current-page")})),document.querySelector('li[value="'.concat(n,'"]')).classList.add("current-page"),t.prev=6,t.next=9,b.default.get("https://books-backend.p.goit.global/books/category?category=".concat(n));case 9:o=t.sent,a=o.data,(r=document.createElement("h2")).classList.add("selected-category-name"),s=n.split(" "),l=s.pop(),i=s.join(" "),r.innerHTML="".concat(i,' <split class="last-word-category">').concat(l,"</split>"),C.appendChild(r),(d=document.createElement("ul")).classList.add("selected-category"),C.appendChild(d),u=document.querySelector(".selected-category"),a.forEach((function(e){var t=document.createElement("li");t.classList.add("book-card-preview");var n='<div class="book-preview-container"">\n                          <div class="book-image">\n                            <img src="'.concat(e.book_image,'" class="img-book" alt="book-title-preview" \n                            loading="lazy" onerror="src=\'').concat(F(),'\'" data-id="').concat(e._id,'">\n                          </div>\n                        <div>\n                          <h2 class="book-title">').concat(e.title,'</h2>\n                          <p class="book-author">').concat(e.author,"</p>\n                        </div></div>");t.innerHTML=n,u.appendChild(t)})),L(),t.next=30;break;case 26:t.prev=26,t.t0=t.catch(6),e(w).Notify.failure("Oops! Something went wrong... Please try again."),L();case 30:case"end":return t.stop()}}),t,null,[[6,26]])})))).apply(this,arguments)}function I(){return(I=e(r)(e(c).mark((function t(){var n,o,a,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(),e.prev=1,e.next=4,b.default.get("https://books-backend.p.goit.global/books/category-list");case 4:n=e.sent,o=n.data,a=o.sort((function(e,t){return e.list_name.localeCompare(t.list_name)})),(r=document.createElement("li")).classList.add("bookcat","allBooks"),r.classList.add("current-page"),r.textContent="All categories",J.appendChild(r),document.querySelector(".allBooks").addEventListener("click",(function(){window.location.href="index.html"})),a.forEach((function(e){var t=document.createElement("li");t.classList.add("bookcat"),t.setAttribute("value",e.list_name),J.appendChild(t),t.innerHTML=e.list_name,t.addEventListener("click",(function(){z(e.list_name)}))})),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0),L();case 21:case"end":return e.stop()}}),t,null,[[1,17]])})))).apply(this,arguments)}window.addEventListener("load",(function(){return I.apply(this,arguments)}));var V=document.querySelector(".scroll-up");V.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-50),setTimeout(e,0))})),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;V.style.display=e>t?"block":"none"}));var D=document.querySelector("header"),X=document.querySelector("body");window.addEventListener("scroll",(function(){window.scrollY>0?(X.style.paddingTop="".concat(D.offsetHeight,"px"),D.classList.add("fixed-header")):(X.style.paddingTop=0,D.classList.remove("fixed-header"))})),a("9Cizd"),a("9Gy8A"),a("fhhbN"),a("2UiAG"),a("2C39u")}();
//# sourceMappingURL=index.5b680ba0.js.map
