/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var chat = document.getElementById('chat');\n  var messageInput = document.getElementById('messageInput');\n  var sendBtn = document.getElementById('sendBtn');\n  var now = new Date();\n  var name = document.querySelector(\".header-title\").textContent || \"Anonymous\";\n  var form = document.querySelector('.form');\n\n  // Загрузка сообщений из localStorage\n  loadMessages();\n\n  // Обработка отправки сообщения по кнопке\n  sendBtn.addEventListener('click', sendMessage);\n\n  // Обработка отправки сообщения по нажатию Enter\n  form.addEventListener('submit', sendMessage);\n\n  // Функция отправки сообщения\n  function sendMessage() {\n    var message = messageInput.value.trim();\n    if (message) {\n      var hours = now.getHours();\n      var minutes = now.getMinutes();\n      var time = \"\".concat(hours, \":\").concat(minutes < 10 ? '0' : '').concat(minutes);\n      var messageObject = {\n        message: message,\n        time: time,\n        name: name\n      };\n      addMessageToChat(messageObject);\n      saveMessageToLocalStorage(messageObject);\n      messageInput.value = ''; // Очистка поля ввода\n    }\n  }\n\n  // Функция добавления сообщения в чат\n  function addMessageToChat(messageObject) {\n    var messageElement = document.createElement('div');\n    messageElement.textContent = \"\".concat(messageObject.name, \" [\").concat(messageObject.time, \"]: \").concat(messageObject.message);\n    chat.appendChild(messageElement);\n    chat.scrollTop = chat.scrollHeight; // Прокрутка вниз\n  }\n\n  // Сохранение сообщений в localStorage\n  function saveMessageToLocalStorage(messageObject) {\n    var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];\n    messages.push(messageObject);\n    localStorage.setItem('chatMessages', JSON.stringify(messages));\n  }\n\n  // Загрузка сообщений из localStorage\n  function loadMessages() {\n    var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];\n    messages.forEach(function (message) {\n      return addMessageToChat(message);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });