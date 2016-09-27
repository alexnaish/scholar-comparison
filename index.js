const fs = require('fs');
const path = require('path');
const jimp = require('jimp');
const async = require('async');

const resemble = require('./resemble');

module.exports = function(image1, image2, callback) {
    resemble(image1)
        .compareTo(image2)
        .ignoreAntialiasing()
        .ignoreColors()
        .onComplete(function(diffData) {
            callback(null, diffData);
        });

};
