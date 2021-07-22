let gallery = document.getElementsByClassName('gallery')[0];
let flatInfo = document.getElementsByClassName('flatInfo')[0];
let map = document.getElementsByTagName('iframe')[0];

map.style.height=gallery.offsetHeight-flatInfo.offsetHeight-10+'px';