var cssProperty = (function() {
  var el = document.createElement("fakeelement");
  var properties = [
    "webkitTransform",
    "mozTransform",
    "oTransform",
    "transform"
  ];
  for(var i = 0; i < properties.length; i++) {
    if (el.style[properties[i]] !== undefined) {
      return properties[i];
    }
  }
})();

var cssMatrix = function(m) {
  var buffer = "matrix3d(";
  for (var i = 0; i < m.length; i++) {
    for(var j = 0; j < m[i].length; j++) {
      buffer += m[i][j] + ",";
    }
  }
  buffer = buffer.slice(0, -1);
  return buffer;
};
