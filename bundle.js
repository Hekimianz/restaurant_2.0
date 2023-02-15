(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(81),s=t.n(i),a=t(645),o=t.n(a),r=t(667),c=t.n(r),d=new URL(t(914),t.b),h=o()(s()),l=c()(d);h.push([e.id,'body {\n  margin: 0;\n  background-color: #2d2d2d;\n  color: #e7e7e7;\n  font-family: "Roboto", sans-serif;\n}\n\n#footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  background: #2d2d2d;\n  padding: 8px 0;\n}\n\na {\n  text-decoration: none;\n  font-size: 1.1em;\n  color: #e7e7e7;\n  transition: 0.5s all;\n}\n\na:hover {\n  color: #7db60e;\n  font-size: 1.2em;\n}\n\n#logoNav {\n  width: 50vw;\n  max-width: 500px;\n}\n\n#content {\n  height: fit-content;\n  padding-top: 30px;\n  background-image: url('+l+');\n  background-size: cover;\n  padding-bottom: 67px;\n  background-color: black;\n}\n\n#navBar {\n  position: sticky;\n  top: 0px;\n  border-bottom: 1px solid #e7e7e7;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n  background: #2d2d2d;\n}\n\n#navLinks {\n  background: #242c41;\n  width: 100%;\n  flex-direction: column;\n  border-radius: 4px;\n  padding: 10px;\n  margin: 10px 0;\n}\n\n.navItem {\n  cursor: pointer;\n  margin-bottom: 10px;\n  transition: all 1s;\n  font-size: 1.5em;\n}\n\n.navItem:last-child {\n  margin-bottom: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.notHidden {\n  display: flex;\n}\n\n#menuBtn {\n  width: 2em;\n  height: 2em;\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.active {\n  color: #7db60e;\n}\n\n.homeImg,\n.boxI {\n  width: 300px;\n  border-radius: 2px;\n}\n\n.intro {\n  font-size: 1.5em;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.css-button-shadow--green {\n  min-width: 130px;\n  height: 40px;\n  color: black;\n  padding: 5px 10px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-block;\n  outline: none;\n  border-radius: 5px;\n  border: none;\n  background-color: #7db60e;\n  box-shadow: 0 3px 1px -2px #7db60e, 0 2px 2px 0 #7db60e, 0 1px 5px 0 #7db60e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.css-button-shadow--green:active {\n  box-shadow: 0 4px 2px -3px #7db60e, 0 4px 5px 1px #7db60e,\n    0 2px 7px 1px #7db60e;\n}\n\n.extract {\n  width: 20px;\n  margin-right: 10px;\n}\n\n.sectionDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.sectionDiv:last-of-type {\n  margin-bottom: 0;\n}\n\n.boxV {\n  box-shadow: 0 4px 2px -3px #7db60e, 0 4px 5px 1px #7db60e,\n    0 2px 7px 1px #7db60e;\n  border-radius: 4px;\n}\n\n.boxes {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.boxes:last-of-type {\n  margin-bottom: 0;\n}\n\n.paragraphs {\n  margin: 30px 10px 0px 10px;\n}\n\n.reviews {\n  text-align: end;\n  padding: 10px 30px;\n  font-family: "Crimson Text", serif;\n}\n\n.reviews:nth-of-type(even) {\n  text-align: start;\n  padding-bottom: 0;\n}\n\n@media screen and (min-width: 850px) {\n  #menuBtn {\n    display: none;\n  }\n  #navLinks {\n    display: flex;\n    flex-direction: row;\n    background-color: inherit;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n  }\n\n  .navItem {\n    margin: 0;\n  }\n\n  #navBar {\n    flex-wrap: nowrap;\n  }\n\n  .active {\n    font-size: 2rem;\n  }\n\n  #box1I {\n    width: 300px;\n  }\n\n  .boxV {\n    width: 300px;\n  }\n\n  .paragraphs {\n    font-size: 1.5em;\n    margin: 30px 60px 0px 60px;\n  }\n  #reviews {\n    display: flex;\n  }\n\n  .reviews {\n    font-size: 1.5em;\n    text-align: center;\n    padding: 10px 15px;\n  }\n  .reviews:nth-of-type(even) {\n    text-align: center;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .homeImg {\n    width: 500px;\n  }\n\n  #box1I {\n    width: 500px;\n  }\n\n  .boxV {\n    width: 500px;\n  }\n\n  .paragraphs {\n    font-size: 1.5em;\n    margin: 30px 60px 0px 60px;\n  }\n  #reviews {\n    display: flex;\n  }\n\n  .reviews {\n    font-size: 1.5em;\n    text-align: center;\n  }\n  .reviews:nth-of-type(even) {\n    text-align: center;\n  }\n\n  .intro {\n    width: 75vw;\n    margin-bottom: 50px;\n  }\n\n  .sectionDiv {\n    margin-bottom: 60px;\n  }\n}\n',""]);const m=h},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var h=[].concat(e[d]);i&&o[h[0]]||(void 0!==a&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=a),t&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=t):h[2]=t),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),n.push(h))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},o=[],r=0;r<e.length;r++){var c=e[r],d=i.base?c[0]+i.base:c[0],h=a[d]||0,l="".concat(d," ").concat(h);a[d]=h+1;var m=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var u=s(p,i);i.byIndex=r,n.splice(r,0,{identifier:l,updater:u,references:1})}o.push(l)}return o}function s(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var a=i(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var r=t(a[o]);n[r].references--}for(var c=i(e,s),d=0;d<a.length;d++){var h=t(a[d]);0===n[h].references&&(n[h].updater(),n.splice(h,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,s&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},914:(e,n,t)=>{e.exports=t.p+"b1f07fefc71b8d26d6ab.png"}},n={};function t(i){var s=n[i];if(void 0!==s)return s.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),s=t.n(i),a=t(569),o=t.n(a),r=t(565),c=t.n(r),d=t(216),h=t.n(d),l=t(589),m=t.n(l),p=t(28),u={};u.styleTagTransform=m(),u.setAttributes=c(),u.insert=o().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=h(),n()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;const v=t.p+"e3e6bfeaca32e0482c09.png",g=t.p+"a6fad9c4010d359e3eee.png",b=t.p+"17d231015123147a0bff.png",x=t.p+"543cbfcc73750a6269eb.png",f=t.p+"da2c89a979a4f72fa494.png",y=t.p+"videos/video2.mp4",w=t.p+"videos/video5.mp4";function L(){({activate(){this.activeLink.classList.add("active"),this.notActiveLink1.classList.remove("active"),this.notActiveLink2.classList.remove("active")},init(){this.cacheDom(),this.modifyDom(),this.render(),this.activate()},cacheDom(){this.activeLink=document.getElementById("aboutNav"),this.notActiveLink1=document.getElementById("homeNav"),this.notActiveLink2=document.getElementById("menuNav"),this.body=document.getElementById("content"),this.box1=Object.assign(document.createElement("div"),{id:"box1",classList:"boxes"}),this.p1=Object.assign(document.createElement("p"),{id:"p1",classList:"paragraphs"}),this.box1I=Object.assign(document.createElement("img"),{id:"box1I",src:f,classList:"boxI"}),this.box2=Object.assign(document.createElement("div"),{id:"box2",classList:"boxes"}),this.box2V=Object.assign(document.createElement("video"),{id:"box2V",width:"240",classList:"boxV",autoplay:"autoplay",loop:"loop"}),this.box2VSrc=Object.assign(document.createElement("source"),{src:y}),this.p2=Object.assign(document.createElement("p"),{id:"p2",classList:"paragraphs"}),this.box3=Object.assign(document.createElement("div"),{id:"box3",classList:"boxes"}),this.box3V=Object.assign(document.createElement("video"),{id:"box3V",width:"240",classList:"boxV",autoplay:"autoplay",loop:"loop"}),this.box3VSrc=Object.assign(document.createElement("source"),{src:w}),this.review1=Object.assign(document.createElement("p"),{id:"review1",classList:"reviews"}),this.review2=Object.assign(document.createElement("p"),{id:"review2",classList:"reviews"}),this.review3=Object.assign(document.createElement("p"),{id:"review3",classList:"reviews"}),this.review4=Object.assign(document.createElement("p"),{id:"review4",classList:"reviews"}),this.reviews=Object.assign(document.createElement("div"),{id:"reviews"})},modifyDom(){this.p1.innerText="As you dine, enjoy the ambiance of a simulated firefight with our immersive sound effects and dynamic lighting. Whether you're a die-hard fan of the game or just looking for a unique and exciting dining experience, the Cheeki Breeki is the perfect place for you. Come join us and see if you have what it takes to survive in Tarkov.",this.p2.innerText="Additionally, we offer an immersive virtual reality experience where you can experience Tarkov for yourself. You will be equipped with VR headsets and motion-sensing controllers, allowing you to move and interact in the game world. Explore the city, scavenge for supplies, and fight against enemy players as you try to make your escape. ",this.review1.innerText='"I had an unforgettable dining experience at The Cheeki Breeki. The atmosphere was intense and the food was delicious. Highly recommend for anyone looking for something different."',this.review2.innerText='"I was blown away by the level of detail in the decor and the immersive sound effects. It truly feels like you\'re in the Tarkov world. The DevilDog Mayo was especially delicious."',this.review3.innerText="\"The VR experience was a game changer. I've never felt so immersed in a virtual world before. I can't wait to come back and play again.\"",this.review4.innerText='"This restaurant is a must-visit for fans of the game. The attention to detail is impeccable and the VR experience is unlike anything I\'ve ever tried. Highly recommend."'},render(){this.body.appendChild(this.box1),this.box1.append(this.box1I,this.p1),this.body.appendChild(this.box2),this.box2.append(this.box2V,this.p2),this.box2V.appendChild(this.box2VSrc),this.body.appendChild(this.box3),this.box3.appendChild(this.box3V),this.box3V.appendChild(this.box3VSrc),this.body.appendChild(this.reviews),this.reviews.append(this.review1,this.review2,this.review3,this.review4)}}).init()}function k(){({activate(){this.activeLink.classList.add("active"),this.notActiveLink1.classList.remove("active"),this.notActiveLink2.classList.remove("active")},init(){this.cacheDom(),this.render(),this.activate()},cacheDom(){this.activeLink=document.getElementById("menuNav"),this.notActiveLink1=document.getElementById("homeNav"),this.notActiveLink2=document.getElementById("aboutNav"),this.body=document.getElementById("content"),this.h1=document.createElement("h1"),this.h1.innerText="Menu Page"},render(){this.body.appendChild(this.h1)}}).init()}const E=t.p+"d1627b19f66d4670e32a.png",I=t.p+"81ef63a3ee94319ac95f.png";function T(){({init(){this.cacheDom(),this.modifyDom(),this.render(),this.eventListeners(),this.activate()},cacheDom(){this.activeLink=document.getElementById("homeNav"),this.notActiveLink1=document.getElementById("aboutNav"),this.notActiveLink2=document.getElementById("menuNav"),this.body=document.getElementById("content"),this.aboutDiv=Object.assign(document.createElement("div"),{id:"aboutDiv",classList:"sectionDiv"}),this.menuDiv=Object.assign(document.createElement("div"),{id:"menuDiv",classList:"sectionDiv"}),this.img1=Object.assign(document.createElement("img"),{id:"img1",classList:"homeImg",src:b}),this.aboutIntro=Object.assign(document.createElement("p"),{id:"aboutIntro",classList:"intro"}),this.aboutBtn=Object.assign(document.createElement("button"),{id:"aboutBtn",classList:"css-button-shadow--green"}),this.menuBtn=Object.assign(document.createElement("button"),{id:"ourmenuBtn",classList:"css-button-shadow--green"}),this.menuImg=Object.assign(document.createElement("img"),{id:"menuImg",classList:"homeImg",src:x}),this.menuIntro=Object.assign(document.createElement("p"),{id:"menuIntro",classList:"intro"}),this.allBtns=document.getElementsByClassName("css-button-shadow--green")},modifyDom(){this.aboutIntro.innerText="Welcome to the Cheeki Breeki, where we bring the rugged and intense city of Tarkov to life.",this.menuIntro.innerText="Our menu features dishes inspired by the in-game cuisine, such as the limited edition RatCola from the General Sam brand. The secret recipe of this cola still remains a mystery. ",this.aboutBtn.innerHTML=`<img class='extract' src=${E}> About Us`,this.menuBtn.innerHTML=`<img class='extract' src=${I}> Our Menu`},eventListeners(){for(let e=0;e<this.allBtns.length;e+=1)this.allBtns[e].addEventListener("click",this.changePage.bind(this))},changePage(e){"About Us"===e.target.innerText?(this.clearPage(),L()):"Our Menu"===e.target.innerText&&(this.clearPage(),k())},clearPage(){this.body.innerText=""},render(){this.aboutDiv.appendChild(this.img1),this.aboutDiv.appendChild(this.aboutIntro),this.aboutDiv.appendChild(this.aboutBtn),this.menuDiv.appendChild(this.menuImg),this.menuDiv.appendChild(this.menuIntro),this.menuDiv.appendChild(this.menuBtn),this.body.appendChild(this.aboutDiv),this.body.appendChild(this.menuDiv)},activate(){this.activeLink&&(this.activeLink.classList.add("active"),this.notActiveLink1.classList.remove("active"),this.notActiveLink2.classList.remove("active"))}}).init()}T(),{init(){this.cacheDom(),this.modifyDom(),this.render(),this.eventListeners()},cacheDom(){this.content=document.getElementById("content"),this.navBar=Object.assign(document.createElement("nav"),{id:"navBar"}),this.navLinks=Object.assign(document.createElement("div"),{id:"navLinks",classList:"hidden"}),this.logoImg=Object.assign(document.createElement("img"),{id:"logoNav",class:"navItem",src:v}),this.homeNav=Object.assign(document.createElement("span"),{id:"homeNav",classList:"navItem active"}),this.aboutNav=Object.assign(document.createElement("span"),{id:"aboutNav",classList:"navItem"}),this.menuNav=Object.assign(document.createElement("span"),{id:"menuNav",classList:"navItem"}),this.footer=Object.assign(document.createElement("footer"),{id:"footer"}),this.menuBtn=Object.assign(document.createElement("img"),{id:"menuBtn",src:g}),this.allNavLinks=document.getElementsByClassName("navItem"),this.active=document.getElementsByClassName("active")},modifyDom(){this.homeNav.innerText="Home",this.aboutNav.innerText="About us",this.menuNav.innerText="Menu",this.footer.innerHTML="Made by <a href='https://github.com/Hekimianz' target='_blank' ><span>Aram Hekimian</span>"},render(){document.body.insertBefore(this.navBar,this.content),this.navLinks.append(this.homeNav,this.aboutNav,this.menuNav),this.navBar.append(this.logoImg,this.menuBtn,this.navLinks),document.body.appendChild(this.footer)},eventListeners(){this.menuBtn.addEventListener("click",this.showHideMenu.bind(this));for(let e=0;e<this.allNavLinks.length;e+=1)this.allNavLinks[e].addEventListener("click",this.changePage.bind(this))},changePage(e){e.target.classList.contains("active")||(this.active[0].classList.remove("active"),e.target.classList.add("active"),"Home"===e.target.innerText?(this.clearPage(),T()):"About us"===e.target.innerText?(this.clearPage(),L()):"Menu"===e.target.innerText&&(this.clearPage(),k()))},clearPage(){this.content.innerText=""},showHideMenu(){this.navLinks.classList.contains("hidden")?(this.navLinks.classList.add("notHidden"),this.navLinks.classList.remove("hidden")):this.navLinks.classList.contains("notHidden")&&(this.navLinks.classList.add("hidden"),this.navLinks.classList.remove("notHidden"))}}.init()})()})();