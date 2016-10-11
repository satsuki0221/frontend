'use strict';

// アロー関数
var show = function show(text) {
  console.log(text);
};

// 引数が一つの時には()を省略可能
var show = function show(text) {
  console.log(text);
};

// また一文の場合、{}とreturnの省略も可能。
var show = function show(text) {
  return text + ' さようなら';
};

var text = show('こんにちは');
console.log(text); // こんにちは さようなら