const fs = require('fs');
const path = require('path');
const jimp = require('jimp');
const async = require('async');

const resemble = require('./resemble');

resemble.setErrorRgbColour(255, 0, 0);
resemble.setErrorOpacity(0.4);
resemble.setLargeImageThreshold(2400);

module.exports = function(image1, image2, callback) {
    resemble(image1)
        .compareTo(image2)
        .ignoreAntialiasing()
        .ignoreColors()
        .onComplete(function(diffData) {
            callback(null, diffData);
        });

};
