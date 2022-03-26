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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/iceplatform.png":
/*!*********************************!*\
  !*** ./src/img/iceplatform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "beedd89027522de93f7424558f5151d1.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_iceplatform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/iceplatform.png */ "./src/img/iceplatform.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


console.log(_img_iceplatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 0.6;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'blue';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;else this.velocity.y = 0;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y,
      image: ''
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y); //c.fillStyle = 'green'
      //c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }]);

  return Platform;
}();

var image = new Image();
image.src = _img_iceplatform_png__WEBPACK_IMPORTED_MODULE_0__["default"];
console.log(image);
var player = new Player();
var platforms = [new Platform({
  x: 0,
  y: canvas.height - image.height,
  image: image
}), new Platform({
  x: 350,
  y: canvas.height - 250,
  image: image
}), new Platform({
  x: 800,
  y: canvas.height - 450,
  image: image
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  jump: {
    pressed: false
  }
};
var myGamepad;
var counter;
var scrollOffset = 0;

function animate(counter) {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach(function (platform) {
    platform.draw();
  }); //myGamepad = navigator.getGamepads()[0]; // use the first gamepad (xbox-only)
  //keyboard nav

  if (keys.right.pressed && player.position.x < 500) {
    console.log('move right');
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    console.log("move left");
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
        scrollOffset += 5;
      });
    } else if (keys.left.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x += 5;
        scrollOffset -= 5;
      });
    }
  }

  if (scrollOffset > 3000) {
    player.velocity.x = 0;
    console.log("you win");
  } //Game pad code
  // if (  && player.position.x < 500) {
  //     console.log('move right')
  //     player.velocity.x = 5
  // } else if(myGamepad.axes[0] <= -.8 && player.position.x > 100) {
  //     player.velocity.x = -5
  // } else {
  //     player.velocity.x = 0
  // if(myGamepad.axes[0] > .8){
  //     platforms.forEach(platform => {
  //         platform.position.x -= 5
  //     })
  // }else if (myGamepad.axes[0] <= -.8){
  //     platforms.forEach(platform => {
  //         platform.position.x += 5
  //     })
  // }
  // }
  //gamepad jump function
  // if (myGamepad.buttons[0].pressed){
  //     console.log("jump")
  //     console.log(myGamepad.buttons[0].pressed)
  //         player.velocity.y = -15
  // }else{
  //     console.log("do you get here")
  //     myGamepad.buttons[0].pressed = false
  // }
  //tracking collion on platform


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  console.log("animation loop running");
}

animate();
addEventListener('keydown', function (_ref2) {
  var keyCode = _ref2.keyCode;

  //console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log(" pressing left button");
      keys.left.pressed = true;
      break;

    case 83:
      console.log("down");
      player.velocity.y = 0;
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;

    case 87:
      console.log("up");
      player.velocity.y -= 25;
      break;
  }
});
addEventListener('keyup', function (_ref3) {
  var keyCode = _ref3.keyCode;

  //console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 83:
      console.log("down");
      player.velocity.y = 0;
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 87:
      console.log("up");
      player.velocity.y = 0;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map