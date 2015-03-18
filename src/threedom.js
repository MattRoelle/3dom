var threedom = function(el) {
  var $el;
  var plural = false;

  if (window.jQuery === undefined) {
    if (el.constructor === String) {
      // Argument is a string
      $el = document.querySelectorAll(el);
      if ($el.length > 1) {
        $el = $el[0];
      } else {
        plural = true;
      }
    } else if (el.nodeType !== undefined) {
      // Argument is a DOM element
      $el = el;
    } else if (el.constructor === NodeList) {
      // Argument is a NodeList
      $el = el;
      plural = true;
    }
  } else {
    // TODO: Add jQuery compatibility
  }
}

exports = threedom;
