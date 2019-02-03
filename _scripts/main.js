window.onload = function(){
  document.querySelector('div.holder').innerHTML += " < "+((location.pathname.substring(1) === "") ? "グエエ" : decodeURI(location.pathname.substring(1)));
}
