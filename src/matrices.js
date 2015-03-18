var multiplyMatrices = function(m1, m2) {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
    result[i] = [];
    for (var j = 0; j < m2[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
};

var identityMatrix = function() {
  return [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
};

var scaleMatrix = function(x, y, z) {
  return [
    [x, 0, 0, 0],
    [0, y, 0, 0],
    [0, 0, z, 0],
    [0, 0, 0, 1]
  ];
}

var cos = Math.cos;
var sin = Math.sin;

var rotationXMatrix = function(a) {
  return [
    [1, 0, 0, 0],
    [0, cos(a), sin(-a), 0],
    [0, sin(a), cos(a), 0],
    [0, 0, 0, 1]
  ];
};

var rotationYMatrix = function(a) {
  return [
    [cos(a), 0, sin(a), 0],
    [0, 1, 0, 0],
    [sin(-a), 0, cos(a), 0],
    [0, 0, 0, 1]
  ];
};

var rotationZMatrix = function(a) {
  return [
    [cos(a), sin(-a), 0, 0],
    [sin(-a), cos(a), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
};

var translationMatrix = function(x, y, z) {
  return [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [x, y, z, 1]
  ];
};
