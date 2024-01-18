"use strict";
exports.__esModule = true;
var Allat_1 = require("./Allat");
var message;
message = 'Hello TS';
var consoleDiv = document.querySelector('#console');
//document.querySelector('h1').innerText = message;
var allat = new Allat_1.Allat('Pötyi');
consoleDiv === null || consoleDiv === void 0 ? void 0 : consoleDiv.textContent = allat.nevem();
