// Generated by CoffeeScript 1.8.0

/*
 * Kuvien tulostus
 */

(function() {
  this.imageList = ['kuva1.JPG', 'kuva2.JPG', 'kuva3.JPG', 'kuva4.JPG'];

  this.getImages = function(id) {
    var image, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = imageList.length; _i < _len; _i++) {
      image = imageList[_i];
      _results.push((function(image) {
        var node;
        node = document.createElement("img");
        node.setAttribute("src", image);
        return document.getElementById(id).appendChild(node);
      })(image));
    }
    return _results;
  };

  this.printImages = function() {
    var canvas, context, dataUrl, imageSrc, imageTmp, x, _i, _len;
    canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 200;
    context = canvas.getContext("2d");
    x = 0;
    for (_i = 0, _len = imageList.length; _i < _len; _i++) {
      imageSrc = imageList[_i];
      imageTmp = new Image();
      imageTmp.src = imageSrc;
      context.drawImage(imageTmp, x, 0, 250, 200);
      x = x + 250;
    }
    dataUrl = canvas.toDataURL();
    console.log(dataUrl);
    return window.open(dataUrl, "toDataURL() image", "width=1000, height=300");
  };

}).call(this);
