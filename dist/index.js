!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=155)}([function(e,t,n){var i=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);i(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r,o=(r={},function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],u=t.base?o[0]+t.base:o[0],p=n[u]||0,m="".concat(u," ").concat(p);n[u]=p+1;var l=a(m),c={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(s[l].references++,s[l].updater(c)):s.push({identifier:m,updater:f(c,t),references:1}),i.push(m)}return i}function p(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var m,l=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function c(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}var d=null,g=0;function f(e,t){var n,i,r;if(t.singleton){var o=g++;n=d=d||p(t),i=c.bind(null,n,o,!1),r=c.bind(null,n,o,!0)}else n=p(t),i=function(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,n,t),r=function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=a(n[i]);s[r].references--}for(var o=u(e,t),p=0;p<n.length;p++){var m=a(n[p]);0===s[m].references&&(s[m].updater(),s.splice(m,1))}n=o}}}},function(e,t,n){},function(e,t,n){e.exports=n.p+"assets/move.mp3"},function(e,t,n){var i={"./1.jpg":5,"./10.jpg":6,"./100.jpg":7,"./101.jpg":8,"./102.jpg":9,"./103.jpg":10,"./104.jpg":11,"./105.jpg":12,"./106.jpg":13,"./107.jpg":14,"./108.jpg":15,"./109.jpg":16,"./11.jpg":17,"./110.jpg":18,"./111.jpg":19,"./112.jpg":20,"./113.jpg":21,"./114.jpg":22,"./115.jpg":23,"./116.jpg":24,"./117.jpg":25,"./118.jpg":26,"./119.jpg":27,"./12.jpg":28,"./120.jpg":29,"./121.jpg":30,"./122.jpg":31,"./123.jpg":32,"./124.jpg":33,"./125.jpg":34,"./126.jpg":35,"./127.jpg":36,"./128.jpg":37,"./129.jpg":38,"./13.jpg":39,"./130.jpg":40,"./131.jpg":41,"./132.jpg":42,"./133.jpg":43,"./134.jpg":44,"./135.jpg":45,"./136.jpg":46,"./137.jpg":47,"./138.jpg":48,"./139.jpg":49,"./14.jpg":50,"./140.jpg":51,"./141.jpg":52,"./142.jpg":53,"./143.jpg":54,"./144.jpg":55,"./145.jpg":56,"./146.jpg":57,"./147.jpg":58,"./148.jpg":59,"./149.jpg":60,"./15.jpg":61,"./150.jpg":62,"./16.jpg":63,"./17.jpg":64,"./18.jpg":65,"./19.jpg":66,"./2.jpg":67,"./20.jpg":68,"./21.jpg":69,"./22.jpg":70,"./23.jpg":71,"./24.jpg":72,"./25.jpg":73,"./26.jpg":74,"./27.jpg":75,"./28.jpg":76,"./29.jpg":77,"./3.jpg":78,"./30.jpg":79,"./31.jpg":80,"./32.jpg":81,"./33.jpg":82,"./34.jpg":83,"./35.jpg":84,"./36.jpg":85,"./37.jpg":86,"./38.jpg":87,"./39.jpg":88,"./4.jpg":89,"./40.jpg":90,"./41.jpg":91,"./42.jpg":92,"./43.jpg":93,"./44.jpg":94,"./45.jpg":95,"./46.jpg":96,"./47.jpg":97,"./48.jpg":98,"./49.jpg":99,"./5.jpg":100,"./50.jpg":101,"./51.jpg":102,"./52.jpg":103,"./53.jpg":104,"./54.jpg":105,"./55.jpg":106,"./56.jpg":107,"./57.jpg":108,"./58.jpg":109,"./59.jpg":110,"./6.jpg":111,"./60.jpg":112,"./61.jpg":113,"./62.jpg":114,"./63.jpg":115,"./64.jpg":116,"./65.jpg":117,"./66.jpg":118,"./67.jpg":119,"./68.jpg":120,"./69.jpg":121,"./7.jpg":122,"./70.jpg":123,"./71.jpg":124,"./72.jpg":125,"./73.jpg":126,"./74.jpg":127,"./75.jpg":128,"./76.jpg":129,"./77.jpg":130,"./78.jpg":131,"./79.jpg":132,"./8.jpg":133,"./80.jpg":134,"./81.jpg":135,"./82.jpg":136,"./83.jpg":137,"./84.jpg":138,"./85.jpg":139,"./86.jpg":140,"./87.jpg":141,"./88.jpg":142,"./89.jpg":143,"./9.jpg":144,"./90.jpg":145,"./91.jpg":146,"./92.jpg":147,"./93.jpg":148,"./94.jpg":149,"./95.jpg":150,"./96.jpg":151,"./97.jpg":152,"./98.jpg":153,"./99.jpg":154};function r(e){var t=o(e);return n(t)}function o(e){if(n.o(i,e))return i[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return Object.keys(i)},r.resolve=o,(e.exports=r).id=4},function(e,t,n){e.exports=n.p+"img/1.jpg"},function(e,t,n){e.exports=n.p+"img/10.jpg"},function(e,t,n){e.exports=n.p+"img/100.jpg"},function(e,t,n){e.exports=n.p+"img/101.jpg"},function(e,t,n){e.exports=n.p+"img/102.jpg"},function(e,t,n){e.exports=n.p+"img/103.jpg"},function(e,t,n){e.exports=n.p+"img/104.jpg"},function(e,t,n){e.exports=n.p+"img/105.jpg"},function(e,t,n){e.exports=n.p+"img/106.jpg"},function(e,t,n){e.exports=n.p+"img/107.jpg"},function(e,t,n){e.exports=n.p+"img/108.jpg"},function(e,t,n){e.exports=n.p+"img/109.jpg"},function(e,t,n){e.exports=n.p+"img/11.jpg"},function(e,t,n){e.exports=n.p+"img/110.jpg"},function(e,t,n){e.exports=n.p+"img/111.jpg"},function(e,t,n){e.exports=n.p+"img/112.jpg"},function(e,t,n){e.exports=n.p+"img/113.jpg"},function(e,t,n){e.exports=n.p+"img/114.jpg"},function(e,t,n){e.exports=n.p+"img/115.jpg"},function(e,t,n){e.exports=n.p+"img/116.jpg"},function(e,t,n){e.exports=n.p+"img/117.jpg"},function(e,t,n){e.exports=n.p+"img/118.jpg"},function(e,t,n){e.exports=n.p+"img/119.jpg"},function(e,t,n){e.exports=n.p+"img/12.jpg"},function(e,t,n){e.exports=n.p+"img/120.jpg"},function(e,t,n){e.exports=n.p+"img/121.jpg"},function(e,t,n){e.exports=n.p+"img/122.jpg"},function(e,t,n){e.exports=n.p+"img/123.jpg"},function(e,t,n){e.exports=n.p+"img/124.jpg"},function(e,t,n){e.exports=n.p+"img/125.jpg"},function(e,t,n){e.exports=n.p+"img/126.jpg"},function(e,t,n){e.exports=n.p+"img/127.jpg"},function(e,t,n){e.exports=n.p+"img/128.jpg"},function(e,t,n){e.exports=n.p+"img/129.jpg"},function(e,t,n){e.exports=n.p+"img/13.jpg"},function(e,t,n){e.exports=n.p+"img/130.jpg"},function(e,t,n){e.exports=n.p+"img/131.jpg"},function(e,t,n){e.exports=n.p+"img/132.jpg"},function(e,t,n){e.exports=n.p+"img/133.jpg"},function(e,t,n){e.exports=n.p+"img/134.jpg"},function(e,t,n){e.exports=n.p+"img/135.jpg"},function(e,t,n){e.exports=n.p+"img/136.jpg"},function(e,t,n){e.exports=n.p+"img/137.jpg"},function(e,t,n){e.exports=n.p+"img/138.jpg"},function(e,t,n){e.exports=n.p+"img/139.jpg"},function(e,t,n){e.exports=n.p+"img/14.jpg"},function(e,t,n){e.exports=n.p+"img/140.jpg"},function(e,t,n){e.exports=n.p+"img/141.jpg"},function(e,t,n){e.exports=n.p+"img/142.jpg"},function(e,t,n){e.exports=n.p+"img/143.jpg"},function(e,t,n){e.exports=n.p+"img/144.jpg"},function(e,t,n){e.exports=n.p+"img/145.jpg"},function(e,t,n){e.exports=n.p+"img/146.jpg"},function(e,t,n){e.exports=n.p+"img/147.jpg"},function(e,t,n){e.exports=n.p+"img/148.jpg"},function(e,t,n){e.exports=n.p+"img/149.jpg"},function(e,t,n){e.exports=n.p+"img/15.jpg"},function(e,t,n){e.exports=n.p+"img/150.jpg"},function(e,t,n){e.exports=n.p+"img/16.jpg"},function(e,t,n){e.exports=n.p+"img/17.jpg"},function(e,t,n){e.exports=n.p+"img/18.jpg"},function(e,t,n){e.exports=n.p+"img/19.jpg"},function(e,t,n){e.exports=n.p+"img/2.jpg"},function(e,t,n){e.exports=n.p+"img/20.jpg"},function(e,t,n){e.exports=n.p+"img/21.jpg"},function(e,t,n){e.exports=n.p+"img/22.jpg"},function(e,t,n){e.exports=n.p+"img/23.jpg"},function(e,t,n){e.exports=n.p+"img/24.jpg"},function(e,t,n){e.exports=n.p+"img/25.jpg"},function(e,t,n){e.exports=n.p+"img/26.jpg"},function(e,t,n){e.exports=n.p+"img/27.jpg"},function(e,t,n){e.exports=n.p+"img/28.jpg"},function(e,t,n){e.exports=n.p+"img/29.jpg"},function(e,t,n){e.exports=n.p+"img/3.jpg"},function(e,t,n){e.exports=n.p+"img/30.jpg"},function(e,t,n){e.exports=n.p+"img/31.jpg"},function(e,t,n){e.exports=n.p+"img/32.jpg"},function(e,t,n){e.exports=n.p+"img/33.jpg"},function(e,t,n){e.exports=n.p+"img/34.jpg"},function(e,t,n){e.exports=n.p+"img/35.jpg"},function(e,t,n){e.exports=n.p+"img/36.jpg"},function(e,t,n){e.exports=n.p+"img/37.jpg"},function(e,t,n){e.exports=n.p+"img/38.jpg"},function(e,t,n){e.exports=n.p+"img/39.jpg"},function(e,t,n){e.exports=n.p+"img/4.jpg"},function(e,t,n){e.exports=n.p+"img/40.jpg"},function(e,t,n){e.exports=n.p+"img/41.jpg"},function(e,t,n){e.exports=n.p+"img/42.jpg"},function(e,t,n){e.exports=n.p+"img/43.jpg"},function(e,t,n){e.exports=n.p+"img/44.jpg"},function(e,t,n){e.exports=n.p+"img/45.jpg"},function(e,t,n){e.exports=n.p+"img/46.jpg"},function(e,t,n){e.exports=n.p+"img/47.jpg"},function(e,t,n){e.exports=n.p+"img/48.jpg"},function(e,t,n){e.exports=n.p+"img/49.jpg"},function(e,t,n){e.exports=n.p+"img/5.jpg"},function(e,t,n){e.exports=n.p+"img/50.jpg"},function(e,t,n){e.exports=n.p+"img/51.jpg"},function(e,t,n){e.exports=n.p+"img/52.jpg"},function(e,t,n){e.exports=n.p+"img/53.jpg"},function(e,t,n){e.exports=n.p+"img/54.jpg"},function(e,t,n){e.exports=n.p+"img/55.jpg"},function(e,t,n){e.exports=n.p+"img/56.jpg"},function(e,t,n){e.exports=n.p+"img/57.jpg"},function(e,t,n){e.exports=n.p+"img/58.jpg"},function(e,t,n){e.exports=n.p+"img/59.jpg"},function(e,t,n){e.exports=n.p+"img/6.jpg"},function(e,t,n){e.exports=n.p+"img/60.jpg"},function(e,t,n){e.exports=n.p+"img/61.jpg"},function(e,t,n){e.exports=n.p+"img/62.jpg"},function(e,t,n){e.exports=n.p+"img/63.jpg"},function(e,t,n){e.exports=n.p+"img/64.jpg"},function(e,t,n){e.exports=n.p+"img/65.jpg"},function(e,t,n){e.exports=n.p+"img/66.jpg"},function(e,t,n){e.exports=n.p+"img/67.jpg"},function(e,t,n){e.exports=n.p+"img/68.jpg"},function(e,t,n){e.exports=n.p+"img/69.jpg"},function(e,t,n){e.exports=n.p+"img/7.jpg"},function(e,t,n){e.exports=n.p+"img/70.jpg"},function(e,t,n){e.exports=n.p+"img/71.jpg"},function(e,t,n){e.exports=n.p+"img/72.jpg"},function(e,t,n){e.exports=n.p+"img/73.jpg"},function(e,t,n){e.exports=n.p+"img/74.jpg"},function(e,t,n){e.exports=n.p+"img/75.jpg"},function(e,t,n){e.exports=n.p+"img/76.jpg"},function(e,t,n){e.exports=n.p+"img/77.jpg"},function(e,t,n){e.exports=n.p+"img/78.jpg"},function(e,t,n){e.exports=n.p+"img/79.jpg"},function(e,t,n){e.exports=n.p+"img/8.jpg"},function(e,t,n){e.exports=n.p+"img/80.jpg"},function(e,t,n){e.exports=n.p+"img/81.jpg"},function(e,t,n){e.exports=n.p+"img/82.jpg"},function(e,t,n){e.exports=n.p+"img/83.jpg"},function(e,t,n){e.exports=n.p+"img/84.jpg"},function(e,t,n){e.exports=n.p+"img/85.jpg"},function(e,t,n){e.exports=n.p+"img/86.jpg"},function(e,t,n){e.exports=n.p+"img/87.jpg"},function(e,t,n){e.exports=n.p+"img/88.jpg"},function(e,t,n){e.exports=n.p+"img/89.jpg"},function(e,t,n){e.exports=n.p+"img/9.jpg"},function(e,t,n){e.exports=n.p+"img/90.jpg"},function(e,t,n){e.exports=n.p+"img/91.jpg"},function(e,t,n){e.exports=n.p+"img/92.jpg"},function(e,t,n){e.exports=n.p+"img/93.jpg"},function(e,t,n){e.exports=n.p+"img/94.jpg"},function(e,t,n){e.exports=n.p+"img/95.jpg"},function(e,t,n){e.exports=n.p+"img/96.jpg"},function(e,t,n){e.exports=n.p+"img/97.jpg"},function(e,t,n){e.exports=n.p+"img/98.jpg"},function(e,t,n){e.exports=n.p+"img/99.jpg"},function(e,t,n){"use strict";function i(e){switch(this.puzzleWrapper=document.querySelector(".puzzle-wrapper"),this._modalBg=document.createElement("div"),this._modal=document.createElement("div"),this._modalInner=document.createElement("div"),this._modalTitle=document.createElement("h3"),this._modalMsg=document.createElement("p"),e){case i.alertType.onGameEnd:this._modalInner.append(this._modalMsg),this._modalTitle.innerText=i.alertType.onGameEnd.title,this._modalMsg.innerText=i.alertType.onGameEnd.getStats();break;case i.alertType.onGameSave:this._modalTitle.innerText=i.alertType.onGameSave.title;break;case i.alertType.onSaveDelete:this._modalTitle.innerText=i.alertType.onSaveDelete.title;break;default:new Error("Wrong alert type")}}n.r(t),n.d(t,"puzzleLogic",(function(){return f})),n.d(t,"puzzleDOM",(function(){return h})),n.d(t,"header",(function(){return _})),n.d(t,"menu",(function(){return v})),n(0),n(3);var r=(i.prototype.showAlert=function(e){var t=this;return void 0===e&&(e=0),setTimeout((function(){var e;t._modalBg.classList.add("modal-bg"),t._modal.classList.add("modal"),t._modalInner.classList.add("modal__inner"),t._modalTitle.classList.add("modal__title"),t._modalMsg.classList.add("modal__msg"),null===(e=t.puzzleWrapper)||void 0===e||e.append(t._modalBg),t._modalBg.append(t._modal),t._modal.append(t._modalInner),t._modalInner.prepend(t._modalTitle)}),e),this},i.prototype.closeAlert=function(e){var t=this;setTimeout((function(){t._modalBg.remove()}),e)},i.alertType={onGameEnd:{title:"Grats!",getStats:function(){return"You won the game in "+_.movesCount+" moves! You've spent "+_.time+" and you solved "+h.boardSize+"x"+h.boardSize+" puzzle!"}},onGameSave:{title:"Game successfully saved!"},onSaveDelete:{title:"Save successfully deleted!"}},i);function o(){this.unsolvedNumArr=[],this._curSave=null}var s,a=(o.prototype.newGame=function(e,t){this._curSave=null,h.boardSize=e,h.createPuzzle(t),this._addEvtListeners(),_.resetMoves(),_.resetTime(),_.startTime(),v.activateResumeBtn(),v.activateSaveBtn(),this.unsolvedNumArr=this.getCurPuzzlesState()},o.prototype.loadGame=function(e){this._curSave=e,h.createPuzzle(null!==e.img,e),this._addEvtListeners(),_.resetMoves(e),_.resetTime(),_.startTime(e),v.activateResumeBtn(),v.activateSaveBtn(),this.unsolvedNumArr=this.getCurPuzzlesState()},o.prototype._move=function(e){var t=h.puzzle.children,n=h.cellsArr.filter((function(e){return"0"===e.id}))[0],i={itemCoords:{col:0,row:0},emptyCoords:{col:0,row:0}},r=function(){for(var n={itemIdx:0,emptyIdx:0},i=0;i<t.length;i++)e.id===t[i].id?n.itemIdx=i+1:"0"===t[i].id&&(n.emptyIdx=i+1);return n}();i.itemCoords=h.calcCoords(r.itemIdx),i.emptyCoords=h.calcCoords(r.emptyIdx),1<Math.abs(i.itemCoords.col-i.emptyCoords.col)+Math.abs(i.itemCoords.row-i.emptyCoords.row)||(v.audioSettings.soundOfMove.activate(),function(e,t){var n=e.parentElement,r=t.parentElement;e.animate(i.itemCoords.col===i.emptyCoords.col&&i.itemCoords.row<i.emptyCoords.row?[{transform:"translateY(-100%)"},{transform:"translateY(0%)"}]:i.itemCoords.col===i.emptyCoords.col&&i.itemCoords.row>i.emptyCoords.row?[{transform:"translateY(100%)"},{transform:"translateY(0%)"}]:i.itemCoords.col>i.emptyCoords.col&&i.itemCoords.row===i.emptyCoords.row?[{transform:"translateX(100%)"},{transform:"translateX(0%)"}]:[{transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,easing:"ease-in-out",iterations:1});var o=document.createElement("div"),s=document.createElement("div");null==n||n.replaceChild(o,e),h.puzzle.replaceChild(s,t),null==r||r.replaceChild(e,s),null==n||n.replaceChild(t,o)}(e,n),_.countMoves(),this._isSolved()&&this._resetGame())},o.prototype.getCurPuzzlesState=function(){var e=[];return h.puzzle.querySelectorAll("div").forEach((function(t){e.push(parseInt(t.id))})),e},o.prototype._isSolved=function(){return this.unsolvedNumArr=this.getCurPuzzlesState(),JSON.stringify(h.solvedNumArr)===JSON.stringify(this.unsolvedNumArr)},o.prototype._resetGame=function(){new r(r.alertType.onGameEnd).showAlert(200).closeAlert(7e3),v.fillRecordsStorage(this._curSave),_.resetMoves(),_.resetTime(),_.deactivateMenuBtn(),v.deactivateResumeBtn(),v.deactivateSaveBtn(),setTimeout((function(){h.createInitScreen(),v.showMainMenu()}),7e3)},o.prototype._addEvtListeners=function(){var e=this;h.cellsArr.forEach((function(t){t.addEventListener("mousedown",(function(){"0"!==t.id&&e._move(t)}))}))},o),u=(s=n(4)).keys().reduce((function(e,t){return e[t.replace("./","")]=s(t),e}),{});function p(){this._boardSize=0,this._puzzleItem=null,this.puzzle=document.createElement("div"),this._puzzleWrapper=document.querySelector(".puzzle-wrapper"),this.numArr=[],this.solvedNumArr=[],this.cellsArr=[],this.img=null}var m=(Object.defineProperty(p.prototype,"boardSize",{get:function(){return this._boardSize},set:function(e){if(!(2<=e&&e<=8))throw new Error("Invalid board size");this._boardSize=Math.round(e)},enumerable:!1,configurable:!0}),p.prototype.calcCoords=function(e){var t=this.puzzle.clientWidth,n=t/this.boardSize,i=Math.floor(t/n);return{col:e%i==0?i:e%i,row:Math.ceil(e/i)}},p.prototype._chooseRandImg=function(e,t){var n=Math.floor(Math.random()*(t-e+1))+e;return u[n.toString()+".jpg"]},p.prototype._createRandArray=function(e,t){var n;void 0===t&&(t=!1);var i=[];e=Math.pow(e,2);for(var r=0;r<e;r++)i[r]=r;if(this.solvedNumArr=i.slice(),this.solvedNumArr.push(this.solvedNumArr.splice(0,1)[0]),!t)for(r=e-1;0<r;r--){var o=Math.floor(Math.random()*(r+1));n=[i[o],i[r]],i[r]=n[0],i[o]=n[1]}return i},p.prototype._isSovlable=function(){for(var e=this.numArr.length-1,t=0,n=0,i=0;i<e;i++)if(0!==this.numArr[i])for(var r=i+1;r<=e;r++)this.numArr[i]>this.numArr[r]&&0!==this.numArr[r]&&t++;else n=i+1;return this.boardSize%2==0&&(t+=this.calcCoords(n).row),t%2==0},p.prototype._cleanBoard=function(){for(;this.puzzle.firstChild;)this.puzzle.removeChild(this.puzzle.firstChild)},p.prototype.createPuzzle=function(e,t){var n;this._cleanBoard(),this.img=null,this.cellsArr=[],this.puzzle.classList.add("puzzle"),null===(n=this._puzzleWrapper)||void 0===n||n.append(this.puzzle);var i=100/(this.boardSize-1);if(t||!0!==e||(this.img=this._chooseRandImg(1,150)),t)this.solvedNumArr=t.solvedNumArr,this.numArr=t.numArr,this.boardSize=t.boardSizeInt,null!==t.img&&(this.img=t.img,e=!0);else for(;this.numArr=this._createRandArray(this.boardSize),!this._isSovlable(););this.puzzle.style.gridTemplateColumns="repeat("+this.boardSize+", 1fr)";for(var r=this.numArr.length,o=0;o<r;o++)this._puzzleItem=document.createElement("div"),0===this.numArr[o]?this._puzzleItem.classList.add("puzzle__empty"):(e&&(this._puzzleItem.style.color="transparent",this._puzzleItem.style.textShadow="none",this._puzzleItem.style.background="url('"+this.img+"')",this._puzzleItem.style.backgroundSize=100*this.boardSize+"%",this._puzzleItem.style.backgroundPosition=(this.calcCoords(this.numArr[o]).col-1)*i+"%\n             "+(this.calcCoords(this.numArr[o]).row-1)*i+"%"),this._puzzleItem.classList.add("puzzle__item"),this._puzzleItem.innerText=this.numArr[o].toString()),this._puzzleItem.setAttribute("id",this.numArr[o].toString()),this.puzzle.append(this._puzzleItem),this.cellsArr.push(this._puzzleItem)},p.prototype.createInitScreen=function(){var e;this._cleanBoard(),this._createRandArray(4,!0),this.puzzle.style.gridTemplateColumns="repeat(4, 1fr)",this.puzzle.classList.add("puzzle"),null===(e=this._puzzleWrapper)||void 0===e||e.append(this.puzzle);for(var t=0;t<this.solvedNumArr.length;t++)this._puzzleItem=document.createElement("div"),0===this.solvedNumArr[t]?this._puzzleItem.classList.add("puzzle__empty"):(this._puzzleItem.classList.add("puzzle__item"),this._puzzleItem.innerText=this.solvedNumArr[t].toString()),this.puzzle.append(this._puzzleItem)},p);function l(){this._puzzleWrapper=document.querySelector(".puzzle-wrapper"),this._header=document.createElement("header"),this._stats=document.createElement("div"),this._statsTimeWrapper=document.createElement("time"),this._statsTime=document.createElement("span"),this._statsMovesWrapper=document.createElement("div"),this._statsMoves=document.createElement("span"),this.headerBtn=document.createElement("button"),this._timeText=document.createTextNode("Time: "),this._timerInterval=0,this.elapsedTime=0,this._startTime=0,this._moveText=document.createTextNode("Moves: "),this.movesCount=0,this.time=""}var c=(l.prototype.createHeader=function(){var e,t=this;this._header.classList.add("header"),this._stats.classList.add("stats"),this._statsMovesWrapper.classList.add("stats__item"),this._statsTimeWrapper.classList.add("stats__item"),this.headerBtn.classList.add("header__btn"),this._statsMoves.setAttribute("id","moves"),this._statsTime.setAttribute("id","time"),this.headerBtn.setAttribute("id","pause-resume"),this.headerBtn.setAttribute("disabled","true"),this._statsTimeWrapper.append(this._statsTime),this._stats.append(this._statsTimeWrapper),this._statsMovesWrapper.append(this._statsMoves),this._stats.append(this._statsMovesWrapper),this._header.append(this._stats),this._header.append(this.headerBtn),null===(e=this._puzzleWrapper)||void 0===e||e.prepend(this._header),this._statsTimeWrapper.prepend(this._timeText),this._statsTime.innerText="00:00",this._statsMovesWrapper.prepend(this._moveText),this._statsMoves.innerText="0",this.headerBtn.innerText="Menu",this.headerBtn.addEventListener("click",(function(){t._pauseGame(),t.headerBtn.blur()}))},l.prototype.activateMenuBtn=function(){this.headerBtn.removeAttribute("disabled")},l.prototype.deactivateMenuBtn=function(){this.headerBtn.setAttribute("disabled","true")},l.prototype._formatTime=function(e){var t=e/36e5,n=60*(t-Math.floor(t)),i=Math.floor(n),r=60*(n-i),o=Math.floor(r);return i.toString().padStart(2,"0")+":"+o.toString().padStart(2,"0")},l.prototype.startTime=function(e){var t=this;e&&(this.elapsedTime=e.timeInt),this._startTime=Date.now()-this.elapsedTime,this._timerInterval=setInterval((function(){t.elapsedTime=Date.now()-t._startTime,t._statsTime.innerText=t._formatTime(t.elapsedTime),t.time=t._statsTime.innerText}),10)},l.prototype._pauseTime=function(){clearInterval(this._timerInterval)},l.prototype.resetTime=function(){clearInterval(this._timerInterval),this._statsTime.innerText="00:00",this.elapsedTime=0},l.prototype.countMoves=function(){this._statsMoves.innerText=(++this.movesCount).toString()},l.prototype.resetMoves=function(e){this.movesCount=e?e.moves:0,this._statsMoves.innerText=this.movesCount.toString()},l.prototype._pauseGame=function(){this._pauseTime(),v.showMainMenu()},l);function d(){this._puzzleWrapper=document.querySelector(".puzzle-wrapper"),this.menuItemArr=[],this.menuMainBtnArr=[],this.menu=document.createElement("div"),this._menuMainBtn=null,this._menuItem=null,this._menuItemContent=null,this._menuItemTitle=null,this._menuTable=null,this._menuTableRow=null,this._menuTableTh=null,this._menuTableTd=null,this._menuBackBtn=document.createElement("button"),this._menuTableBtn=null,this._menuItemTxt=null,this._menuItemSubtitle=null,this._menuItemSelect=null,this._menuItemOption=null,this._menuItemInput=null,this._menuItemLabel=null,this._menuSubitem=null,this._saves=window.localStorage.getItem("saves"),this._savesArr=[],this._records=window.localStorage.getItem("records"),this._recordsArr=[],this._puzzleStyle=!1,this.audioSettings={soundOfMove:{isMute:!1,path:"assets/move.mp3",activate:function(){if(!this.isMute){var e=new Audio;e.src=this.path,e.volume=.2,e.play()}}}},this.menuSetup={class:"menu",modif:{visible:"menu--visible"}},this.menuItemSetup={main:"menu__item",modif:{visible:"menu__item--visible"},attrName:"id"}}var g=(d.prototype._clearTable=function(e){document.querySelectorAll(e).forEach((function(e){e.remove()}))},d.prototype._fillRecordsTable=function(){var e;this._clearTable("#records-row");for(var t=0;t<this._recordsArr.length;t++)this._menuTableRow=document.createElement("tr"),this._menuTableRow.setAttribute("id","records-row"),null===(e=document.querySelector(".records-table"))||void 0===e||e.append(this._menuTableRow),this._menuTableTd=document.createElement("td"),this._menuTableTd.innerText=this._recordsArr[t].puzzleStyle,this._menuTableRow.append(this._menuTableTd),this._menuTableTd=document.createElement("td"),this._menuTableTd.innerText=this._recordsArr[t].score,this._menuTableRow.append(this._menuTableTd),this._menuTableTd=document.createElement("td"),this._menuTableTd.innerText=this._recordsArr[t].timeTxt,this._menuTableRow.append(this._menuTableTd),this._menuTableTd=document.createElement("td"),this._menuTableTd.innerText=this._recordsArr[t].moves,this._menuTableRow.append(this._menuTableTd),this._menuTableTd=document.createElement("td"),this._menuTableTd.innerText=this._recordsArr[t].boardSizeTxt,this._menuTableRow.append(this._menuTableTd)},d.prototype.fillRecordsStorage=function(e){function t(){return e?null!==e.img:!1!==n._puzzleStyle}var n=this,i={score:"",puzzleStyle:t()?"Img":"Num",boardSizeInt:h.boardSize,boardSizeTxt:h.boardSize+"x"+h.boardSize,timeTxt:_.time,timeInt:_.elapsedTime,moves:_.movesCount};if(t())switch(i.boardSizeInt){case 3:i.score=Math.ceil(3e5/(i.timeInt/1e3*2+2.7*i.moves)).toString();break;case 4:i.score=Math.ceil(6e5/(i.timeInt/1e3*1.5+1.6*i.moves)).toString();break;case 5:i.score=Math.ceil(165e4/(i.timeInt/1e3*1.2+1.4*i.moves)).toString();break;case 6:i.score=Math.ceil(24e5/(i.timeInt/1e3*.85+1.2*i.moves)).toString();break;case 7:i.score=Math.ceil(33e5/(i.timeInt/1e3*.5+1.1*i.moves)).toString();break;case 8:i.score=Math.ceil(42e5/(i.timeInt/1e3*.3+1*i.moves)).toString()}else switch(i.boardSizeInt){case 3:i.score=Math.ceil(1e5/(i.timeInt/1e3*3.2+3*i.moves)).toString();break;case 4:i.score=Math.ceil(3e5/(i.timeInt/1e3*1.75+1.7*i.moves)).toString();break;case 5:i.score=Math.ceil(55e4/(i.timeInt/1e3*1.35+1.5*i.moves)).toString();break;case 6:i.score=Math.ceil(8e5/(i.timeInt/1e3*1.1+1.25*i.moves)).toString();break;case 7:i.score=Math.ceil(11e5/(i.timeInt/1e3*.8+1.1*i.moves)).toString();break;case 8:i.score=Math.ceil(14e5/(i.timeInt/1e3*.5+1*i.moves)).toString()}this._recordsArr.push(i),this._recordsArr.sort((function(e,t){return t.score-e.score})),10<this._recordsArr.length&&this._recordsArr.pop(),window.localStorage.setItem("records",JSON.stringify(this._recordsArr)),this._records=window.localStorage.getItem("records"),this._fillRecordsTable()},d.prototype.activateResumeBtn=function(){this.menuMainBtnArr.filter((function(e){return"btn-resume"===e.id}))[0].removeAttribute("disabled")},d.prototype.deactivateResumeBtn=function(){this.menuMainBtnArr.filter((function(e){return"btn-resume"===e.id}))[0].setAttribute("disabled","true")},d.prototype.activateSaveBtn=function(){this.menuMainBtnArr.filter((function(e){return"btn-save"===e.id}))[0].removeAttribute("disabled")},d.prototype.deactivateSaveBtn=function(){this.menuMainBtnArr.filter((function(e){return"btn-save"===e.id}))[0].setAttribute("disabled","true")},d.prototype.showMainMenu=function(){this.menu.classList.add(this.menuSetup.modif.visible),this.menuItemArr[0].classList.add(this.menuItemSetup.modif.visible)},d.prototype.createMenu=function(){var e,t,n=this;function i(e,t,i,r){n._menuItem=document.createElement("div"),n._menuItemContent=document.createElement("div"),n._menuItemTitle=document.createElement("h3"),r&&n._menuItem.classList.add(r),n._menuItem.classList.add(n.menuItemSetup.main),n._menuItem.setAttribute(e,t),n._menuItemContent.classList.add("menu__content"),n._menuItemTitle.classList.add("menu__title"),n._menuItemTitle.innerText=i,n._menuItem.append(n._menuItemTitle),n._menuItem.append(n._menuItemContent);var o=n._menuBackBtn.cloneNode(!0);o.addEventListener("click",(function(){var e;null===(e=o.parentElement)||void 0===e||e.classList.remove(n.menuItemSetup.modif.visible),n.menuItemArr[0].classList.add(n.menuItemSetup.modif.visible)})),n._menuItem.append(o),n.menu.append(n._menuItem)}null===(e=this._puzzleWrapper)||void 0===e||e.append(this.menu),this.menu.classList.add(this.menuSetup.class,this.menuSetup.modif.visible),this._menuBackBtn.classList.add("menu__back-btn"),this._menuBackBtn.setAttribute("id","btn-back"),this._menuBackBtn.innerText="Back",function(){var e={attrVal:"main",btnClass:"menu__nav-btn",btnAttrName:"id",btnSetup:[{btnAttrVal:"btn-new",btnTxt:"New game"},{btnAttrVal:"btn-resume",btnTxt:"Continue",disabled:"true"},{btnAttrVal:"btn-load",btnTxt:"Load game"},{btnAttrVal:"btn-save",btnTxt:"Save game",disabled:"true"},{btnAttrVal:"btn-scores",btnTxt:"Best scores"},{btnAttrVal:"btn-rules",btnTxt:"Rules"},{btnAttrVal:"btn-settings",btnTxt:"Settings"}]};n._menuItem=document.createElement("div"),n._menuItem.classList.add(n.menuItemSetup.main),n._menuItem.classList.add(n.menuItemSetup.modif.visible),n._menuItem.setAttribute(n.menuItemSetup.attrName,e.attrVal),n.menu.append(n._menuItem);for(var t=0;t<e.btnSetup.length;t++)n._menuMainBtn=document.createElement("button"),n._menuMainBtn.classList.add(e.btnClass),n._menuMainBtn.setAttribute(e.btnAttrName,e.btnSetup[t].btnAttrVal),e.btnSetup[t].disabled&&n._menuMainBtn.setAttribute("disabled","true"),n._menuMainBtn.innerText=e.btnSetup[t].btnTxt,n._menuItem.append(n._menuMainBtn),n.menuMainBtnArr.push(n._menuMainBtn);n.menuItemArr.push(n._menuItem),n.menuMainBtnArr.forEach((function(e){"btn-save"!==e.id&&e.addEventListener("click",(function(){n.menuItemArr[0].classList.remove(n.menuItemSetup.modif.visible)}))})),n.menuMainBtnArr.filter((function(e){return"btn-new"===e.id}))[0].addEventListener("click",(function(){var e;n.menu.classList.remove(n.menuSetup.modif.visible),_.headerBtn.removeAttribute("disabled"),f.newGame(parseInt(null===(e=n._menuItemSelect)||void 0===e?void 0:e.value),n._puzzleStyle)})),n.menuMainBtnArr.filter((function(e){return"btn-resume"===e.id}))[0].addEventListener("click",(function(){n.menu.classList.remove(n.menuSetup.modif.visible),_.startTime()})),n.menuMainBtnArr.filter((function(e){return"btn-load"===e.id}))[0].addEventListener("click",(function(){var e=function(){var t;n._clearTable("#saves-row");for(var i=function(i){n._menuTableRow=document.createElement("tr"),n._menuTableRow.setAttribute("id","saves-row"),null===(t=document.querySelector(".saves-table"))||void 0===t||t.append(n._menuTableRow),n._menuTableTd=document.createElement("td"),n._menuTableTd.innerText=n._savesArr[i].boardSizeTxt,n._menuTableRow.append(n._menuTableTd),n._menuTableTd=document.createElement("td"),n._menuTableTd.innerText=n._savesArr[i].timeTxt,n._menuTableRow.append(n._menuTableTd),n._menuTableTd=document.createElement("td"),n._menuTableTd.innerText=n._savesArr[i].moves,n._menuTableRow.append(n._menuTableTd),n._menuTableTd=document.createElement("td"),n._menuTableBtn=document.createElement("button"),n._menuTableRow.append(n._menuTableTd),n._menuTableTd.append(n._menuTableBtn),n._menuTableBtn.classList.add("btn-load"),n._menuTableBtn.setAttribute("id",n._savesArr[i].id),n._menuTableBtn.innerText="Load",n._menuTableBtn.addEventListener("click",(function(){var e=n._savesArr.find((function(e){return e.id==n._savesArr[i].id}));f.loadGame(e),n.menu.classList.remove(n.menuSetup.modif.visible),n.menuItemArr.filter((function(e){return"menu-saved"===e.id}))[0].classList.remove(n.menuItemSetup.modif.visible),_.headerBtn.removeAttribute("disabled")})),n._menuTableRow.append(n._menuTableBtn),n._menuTableTd=document.createElement("td"),n._menuTableBtn=document.createElement("button"),n._menuTableRow.append(n._menuTableTd),n._menuTableTd.append(n._menuTableBtn),n._menuTableBtn.classList.add("btn-delete"),n._menuTableBtn.setAttribute("id",n._savesArr[i].id),n._menuTableBtn.innerText="Delete",n._menuTableBtn.addEventListener("click",(function(){n._savesArr.splice(n._savesArr.indexOf(n._savesArr.find((function(e){return e.id==n._savesArr[i].id}))),1),window.localStorage.setItem("saves",JSON.stringify(n._savesArr)),n._saves=window.localStorage.getItem("saves"),new r(r.alertType.onSaveDelete).showAlert().closeAlert(2e3),e()})),n._menuTableRow.append(n._menuTableBtn)},o=0;o<n._savesArr.length;o++)i(o)};e(),n.menuItemArr[1].classList.add(n.menuItemSetup.modif.visible)})),n.menuMainBtnArr.filter((function(e){return"btn-save"===e.id}))[0].addEventListener("click",(function(){var e={id:"",img:h.img,boardSizeInt:h.boardSize,boardSizeTxt:h.boardSize+"x"+h.boardSize,timeTxt:_.time,timeInt:_.elapsedTime,moves:_.movesCount,solvedNumArr:h.solvedNumArr,numArr:f.unsolvedNumArr};e.id=Math.floor(1e6*Math.random()).toString()+Math.random().toString(36).substr(2,5).toString(),n._savesArr.push(e),window.localStorage.setItem("saves",JSON.stringify(n._savesArr)),n._saves=window.localStorage.getItem("saves"),new r(r.alertType.onGameSave).showAlert().closeAlert(2e3)})),n.menuMainBtnArr.filter((function(e){return"btn-scores"===e.id}))[0].addEventListener("click",(function(){n.menuItemArr[2].classList.add(n.menuItemSetup.modif.visible)})),n.menuMainBtnArr.filter((function(e){return"btn-rules"===e.id}))[0].addEventListener("click",(function(){n.menuItemArr[3].classList.add(n.menuItemSetup.modif.visible)})),n.menuMainBtnArr.filter((function(e){return"btn-settings"===e.id}))[0].addEventListener("click",(function(){n.menuItemArr[4].classList.add(n.menuItemSetup.modif.visible)}))}(),function(){var e;null!==n._saves&&(n._savesArr=JSON.parse(n._saves));var t={title:"Load game",attrVal:"menu-saved",tableClass:"saves-table",trAttrName:"id",trArrtVal:"save-header-row",tableHeader:[{th:"Size"},{th:"Time"},{th:"Moves"}]};i(n.menuItemSetup.attrName,t.attrVal,t.title),n._menuTable=document.createElement("table"),n._menuTable.classList.add(t.tableClass),n._menuTableRow=document.createElement("tr"),n._menuTableRow.setAttribute(t.trAttrName,t.trArrtVal);for(var r=0;r<t.tableHeader.length;r++)n._menuTableTh=document.createElement("th"),n._menuTableTh.innerText=t.tableHeader[r].th,n._menuTableRow.append(n._menuTableTh),n._menuTable.append(n._menuTableRow);null===(e=n._menuItemContent)||void 0===e||e.append(n._menuTable),n.menuItemArr.push(n._menuItem)}(),function(){var e;null!==n._records&&(n._recordsArr=JSON.parse(n._records));var t={title:"Best scores",attrVal:"menu-scores",tableClass:"records-table",trAttrName:"id",trArrtVal:"record-header-row",tableHeader:[{th:"Puzzles"},{th:"Score"},{th:"Time"},{th:"Moves"},{th:"Size"}]};i(n.menuItemSetup.attrName,t.attrVal,t.title),n._menuTable=document.createElement("table"),n._menuTable.classList.add(t.tableClass),n._menuTableRow=document.createElement("tr"),n._menuTableRow.setAttribute(t.trAttrName,t.trArrtVal);for(var r=0;r<t.tableHeader.length;r++)n._menuTableTh=document.createElement("th"),n._menuTableTh.innerText=t.tableHeader[r].th,n._menuTableRow.append(n._menuTableTh),n._menuTable.append(n._menuTableRow);null===(e=n._menuItemContent)||void 0===e||e.append(n._menuTable),n.menuItemArr.push(n._menuItem),n._fillRecordsTable()}(),i(n.menuItemSetup.attrName,"menu-rules","Rules"),n._menuItemTxt=document.createElement("p"),n._menuItemTxt.innerText="The object of the puzzle is to place the tiles in order by making sliding moves that use the empty space. You can save your game and load it later. Or you can just use pause button. Also you can choose game field size in Settings.",null===(t=n._menuItemContent)||void 0===t||t.append(n._menuItemTxt),n.menuItemArr.push(n._menuItem),function(){function e(e){var t,i;n._menuSubitem=document.createElement("div"),n._menuItemSubtitle=document.createElement("h4"),n._menuSubitem.classList.add("menu__subitem"),null===(t=n._menuItemSubtitle)||void 0===t||t.classList.add("menu__subtitle"),null===(i=n._menuItemContent)||void 0===i||i.append(n._menuSubitem),n._menuSubitem.append(n._menuItemSubtitle),n._menuItemSubtitle.innerText=e}function t(e,t){for(var n in t)e.setAttribute(n,t[n])}var r,o,s,a,u,p,m={title:"Settings",attrVal:"menu-settings",size:{title:"Field size: ",option:[{class:"menu__option",attrVal:"3",txt:"3x3"},{class:"menu__option",attrVal:"4",txt:"4x4",selected:"selected"},{class:"menu__option",attrVal:"5",txt:"5x5"},{class:"menu__option",attrVal:"6",txt:"6x6"},{class:"menu__option",attrVal:"7",txt:"7x7"},{class:"menu__option",attrVal:"8",txt:"8x8"}]},sound:{title:"Sound: ",option:[{label:{for:"sound-on"},input:{type:"radio",id:"sound-on",name:"sound",value:!1,checked:!0},txt:"On"},{label:{for:"sound-off"},input:{type:"radio",id:"sound-off",name:"sound",value:!0},txt:"Off"}]},puzzleStyle:{title:"Puzzles: ",option:[{label:{for:"style-num"},input:{type:"radio",id:"style-num",name:"puzzle-style",value:!1},txt:"Numbers"},{label:{for:"style-img"},input:{type:"radio",id:"style-img",name:"puzzle-style",value:!0,checked:!0},txt:"Image"}]}};i(n.menuItemSetup.attrName,m.attrVal,m.title);for(var l=0;l<m.size.option.length;l++)0===l&&(e(m.size.title),n._menuItemSelect=document.createElement("select"),null===(r=n._menuSubitem)||void 0===r||r.append(n._menuItemSelect)),n._menuItemOption=document.createElement("option"),n._menuItemOption.classList.add(m.size.option[l].class),t(n._menuItemOption,m.size.option[l]),n._menuItemOption.innerText=m.size.option[l].txt,null===(o=n._menuItemSelect)||void 0===o||o.append(n._menuItemOption);for(l=0;l<m.sound.option.length;l++)0===l&&e(m.sound.title),n._menuItemInput=document.createElement("input"),n._menuItemLabel=document.createElement("label"),t(n._menuItemInput,m.sound.option[l].input),t(n._menuItemLabel,m.sound.option[l].label),m.sound.option[l].input.checked&&(n.audioSettings.soundOfMove.isMute=m.sound.option[l].input.value),n._menuItemLabel.innerText=m.sound.option[l].txt,null===(s=n._menuSubitem)||void 0===s||s.append(n._menuItemInput),null===(a=n._menuSubitem)||void 0===a||a.append(n._menuItemLabel);for(document.getElementsByName("sound").forEach((function(e){e.addEventListener("click",(function(){"sound-on"===e.id?n.audioSettings.soundOfMove.isMute=!1:n.audioSettings.soundOfMove.isMute=!0}))})),l=0;l<m.puzzleStyle.option.length;l++)0===l&&e(m.puzzleStyle.title),n._menuItemInput=document.createElement("input"),n._menuItemLabel=document.createElement("label"),t(n._menuItemInput,m.puzzleStyle.option[l].input),t(n._menuItemLabel,m.puzzleStyle.option[l].label),m.puzzleStyle.option[l].input.checked&&(n._puzzleStyle=m.puzzleStyle.option[l].input.value),n._menuItemLabel.innerText=m.puzzleStyle.option[l].txt,null===(u=n._menuSubitem)||void 0===u||u.append(n._menuItemInput),null===(p=n._menuSubitem)||void 0===p||p.append(n._menuItemLabel);document.getElementsByName("puzzle-style").forEach((function(e){e.addEventListener("click",(function(){"style-num"===e.id?n._puzzleStyle=!1:n._puzzleStyle=!0}))})),n.menuItemArr.push(n._menuItem)}()},d),f=new a,h=new m,_=new c,v=new g;h.createInitScreen(),_.createHeader(),v.createMenu()}]);