/**
 * Add support fo CSS3 box-sizing: border-box model for IE6 and IE7
 * 
 * @author Alberto Gasparin http://albertogasparin.it/
 * @version 1.0, License MIT
 * 
 **/

var borderBoxModel=(function(){var h=document.getElementsByTagName("*"),d,f,e,g="border-box";for(var c=0,a=h.length;c<a;c++){d=h[c];e=d.style;f=d.currentStyle;if(e.boxSizing==g||e["box-sizing"]==g||f.boxSizing==g||f["box-sizing"]==g){b()}}function b(){if(parseInt(f.width,10)||parseInt(e.width,10)){var i=d.offsetWidth,n=parseInt(f.borderLeftWidth||e.borderLeftWidth,10)||0,p=parseInt(f.borderRightWidth||e.borderRightWidth,10)||0,l=parseInt(f.paddingLeft||e.paddingLeft,10),k=parseInt(f.paddingRight||e.paddingRight,10);e.width=i-(n+l+k+p)*2}if(parseInt(f.height)||parseInt(e.height)){var q=d.offsetHeight,m=parseInt(f.borderTopWidth||e.borderTopWidth,10)||0,o=parseInt(f.borderBottomWidth||e.borderBottomWidth,10)||0,r=parseInt(f.paddingTop||e.paddingTop,10),j=parseInt(f.paddingBottom||e.paddingBottom,10);e.height=q-(m+r+j+o)*2}}})();