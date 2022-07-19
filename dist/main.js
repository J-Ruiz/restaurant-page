(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"body {\n    margin: 0;\n    background:url(https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80) ;\n    background-size: 100% 100%;\n}   \n\n#content{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n}\n#title {\n    width: 100%;\n    height: auto;\n    margin: auto;\n    z-index: 0;\n    position: fixed;\n}\n\np#curry-house {\n    text-align: center;\n    font-size: 4em;\n    height: 70px;\n    color: #ffd507;\n    font-family: fantasy;\n    font-weight: bold;\n    margin: 0;\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n\n#nav {\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-family: fantasy;\n}\n\n.p-nav {\n    font-weight: bold;\n    font-size: 30px;\n    height: auto;\n    width: 100%;\n    text-align: center;\n    border: solid transparent;\n    margin: 10px;\n    padding: 10px;\n}\n\n.p-nav:hover {\n    border: solid white;\n    background-color: #ff0000a8;\n}\n\n#popup {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    z-index: -1;\n}\n\n\ndiv#popup-home {\n    font-family: cursive;\n    font-size: 40px;\n    color: #ff9207;\n    position: absolute;\n    top: 30%;\n}\n\n#popup-home p {\n    background: #a52a2ae8;\n    padding: 20px;\n    border-radius: 10px;\n}\n\ndiv#popup-menu{\n    visibility: hidden;\n    position: absolute;\n    top: 30%;\n    height: auto;\n}\nimg {\n    height: 60vh;\n    width: 65vw;\n}\n\ndiv#popup-contact {\n    background-color: #a52a2ae8;\n    width: 40%;\n    color: white;\n    text-align: center;\n    position: absolute;\n    font-size: 3vh;\n    top: 30%;\n    padding: 20px 10px;\n    border-radius: 10px;\n    visibility: hidden;\n}\n\n\n#footer {\n    height: 40px;\n    text-align: center;\n    background-color: #fafad2c7;\n    opacity: .8;\n    font-weight: bold;\n    position: fixed;\n    width: 100%;\n    bottom: 0%;\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=o.base?s[0]+o.base:s[0],d=i[p]||0,u="".concat(p," ").concat(d);i[p]=d+1;var l=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),p=0;p<i.length;p++){var d=t(i[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),p=t(216),d=t.n(p),u=t(589),l=t.n(u),f=t(426),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;Array.from(document.querySelectorAll(".p-nav")).forEach((n=>{n.addEventListener("click",(()=>{document.getElementById("popup-home").style.visibility="hidden",document.getElementById("popup-menu").style.visibility="hidden",document.getElementById("popup-contact").style.visibility="hidden",function(n){let e="popup-"+n;document.getElementById(`${e}`).style.visibility="visible"}(n.id)}))}))})()})();