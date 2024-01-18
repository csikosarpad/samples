(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Allat_1 = require("./Allat");
/*let message: string;
message = 'Hello TS';

const consoleDiv = document.querySelector('#console');
//document.querySelector('h1').innerText = message;
*/
var allat = new Allat_1.Allat('Pötyi');
console.log(allat.nevem());
//consoleDiv?.textContent = allat.nevem();

},{"./Allat":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allat = void 0;
var Allat = /** @class */ (function () {
    function Allat(nev) {
        this.nev = nev;
    }
    Allat.prototype.nevem = function () {
        return this.nev;
    };
    return Allat;
}());
exports.Allat = Allat;

},{}]},{},[1]);
