/**
 * Add support fo CSS3 box-sizing: border-box model for IE6 and IE7
 * 
 * @author Alberto Gasparin http://albertogasparin.it/
 * @version 1.0, License MIT
 * 
 **/

var borderBoxModel = (function() {
  var elements = document.getElementsByTagName('*'),
      element, cs, s,
      value = 'border-box';
  
  // cicle through all DOM elements
  for (var i=0, max=elements.length; i < max; i++) {
    element = elements[i];
    s = element.style;
    cs = element.currentStyle;
    
    // check if box-sizing is specified and is equal to border-box
    if(s.boxSizing == value || s["box-sizing"] == value
       || cs.boxSizing == value || cs["box-sizing"] == value) {
      
      // change width and height
      apply();
      
    }
  }
  
  function apply() {
    
    // if width is declared (and not 'auto','',...)
    if(parseInt(cs.width,10) || parseInt(s.width,10)) {
      
      var width = element.offsetWidth, // get width with border and padding
          
          // border value could be 'medium' so parseInt returns NaN
          borderLeft = parseInt(cs.borderLeftWidth || s.borderLeftWidth, 10) || 0,
          borderRight = parseInt(cs.borderRightWidth || s.borderRightWidth, 10) || 0,
          
          paddingLeft = parseInt(cs.paddingLeft || s.paddingLeft, 10),
          paddingRight = parseInt(cs.paddingRight || s.paddingRight, 10);
      
      // remove from width padding and border two times
      s.width = width - (borderLeft + paddingLeft + paddingRight + borderRight) * 2;
    }
    
    // if height is declared (and not 'auto','',...)
    if(parseInt(cs.height) || parseInt(s.height)) {
      
      var height = element.offsetHeight, // get height with border and padding
          
          // border value could be 'medium' so parseInt returns NaN
          borderTop = parseInt(cs.borderTopWidth || s.borderTopWidth, 10) || 0,
          borderBottom = parseInt(cs.borderBottomWidth || s.borderBottomWidth, 10) || 0,
          
          paddingTop = parseInt(cs.paddingTop || s.paddingTop, 10),
          paddingBottom = parseInt(cs.paddingBottom || s.paddingBottom, 10);
      
      // remove from height padding and border two times
      s.height = height - (borderTop + paddingTop + paddingBottom + borderBottom) * 2;
    }
  }
  
})();