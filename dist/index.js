"use strict";
var _ = require('lodash');
console.log("Applicatiton started");
var menu = ['Open', 'Save', 'Edit', 'Exit'];
_.each(menu, function (item, i) {
    console.log(item);
});
console.log("done...");
