"use strict";

var _ref, _ref2, _hello;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _x$y$a$b = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
},
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

var age = 100;
var people = ['Wes', 'Kait'];
var fullNames = people.map(function (name) {
  return "".concat(name, " Bos");
});

function doubleSay(str) {
  return str + ', ' + str;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function exclaim(str) {
  return str + '!';
}

var result = (_ref = (_ref2 = (_hello = 'hello', doubleSay(_hello)), capitalize(_ref2)), exclaim(_ref));
