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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/src/app.js: Unexpected token (7:16)\\n\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[32m\\\"./styles/styles.scss\\\"\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 7 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mIndecisionApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m\\\"app\\\"\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m\\u001b[0m\\n    at Parser._raise (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:742:17)\\n    at Parser.raiseWithData (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:735:17)\\n    at Parser.raise (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:729:17)\\n    at Parser.unexpected (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:8779:16)\\n    at Parser.parseExprAtom (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:10074:20)\\n    at Parser.parseExprSubscripts (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9624:23)\\n    at Parser.parseMaybeUnary (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9604:21)\\n    at Parser.parseExprOps (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9474:23)\\n    at Parser.parseMaybeConditional (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9447:23)\\n    at Parser.parseMaybeAssign (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9402:21)\\n    at Parser.parseExprListItem (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:10740:18)\\n    at Parser.parseCallExpressionArguments (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9812:22)\\n    at Parser.parseSubscript (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9718:31)\\n    at Parser.parseSubscripts (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9647:19)\\n    at Parser.parseExprSubscripts (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9630:17)\\n    at Parser.parseMaybeUnary (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9604:21)\\n    at Parser.parseExprOps (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9474:23)\\n    at Parser.parseMaybeConditional (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9447:23)\\n    at Parser.parseMaybeAssign (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9402:21)\\n    at Parser.parseExpression (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:9354:23)\\n    at Parser.parseStatementContent (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:11233:23)\\n    at Parser.parseStatement (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:11104:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:11679:25)\\n    at Parser.parseBlockBody (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:11665:10)\\n    at Parser.parseTopLevel (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:11035:10)\\n    at Parser.parse (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:12671:10)\\n    at parse (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/parser/lib/index.js:12722:38)\\n    at parser (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/thephilosopher/Documents/Web Development Practice/React Projects/Indecision-App/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });