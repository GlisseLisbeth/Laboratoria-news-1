(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  // wrapper.append(Header(_ => render(root)));
  wrapper.append(Header());
  wrapper.append(Noticias(data));
  root.append(wrapper);
}

const state = {
  noticia: null
};


$( _ => {
  getJSON('/api/news/', (err, json) => {
    if (err) { return alert(err.message);}
    // state.stations = json;
    const root = $('.root');
    render(root,json);
    console.log(json);
    console.log(json[0]);
  });
  $(".button-collapse").sideNav();
});

const Header = () =>{
  // const nav = $('<nav></nav>');
  // const navWrapper = $('<div class="nav-wrapper"></div>');
  // const btnCollapse=$('<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>');
  // const ulLeft = $('<ul class="left hide-on-med-and-down"></ul>');
  // const listLeft = $('<li><a href=""><img src="assets/img/menu.png"/>SECTIONS</a></li><li><a href=""><img src="assets/img/search.png"/>SEARCH</a></li>');
  // const ulRight = $('<ul class="right hide-on-med-and-down"></ul>');
  // const listRight = $('<li><a href=""><img src="assets/img/fb.png"/></a></li><li><a href="#"><img src="assets/img/tw.png"/></a></li><li><a href=""><img src="assets/img/in.png"/></a></li>');
  // const line = $('<hr>');
  // const logo = $('<div><img src="assets/img/logoicon.png"/></div>')
  // const ulContent = $('<ul class="center hide-on-med-and-down"></ul>');
  // const listContent = $('<li><a href="">Lo último</a></li>'+
  //                       '<li><a href="#">Opinión</a></li>'+
  //                       '<li><a href="">Cultura</a></li>'+
  //                       '<li><a href="">Perú</a></li>'+
  //                       '<li><a href="">Tecología</a></li>'+
  //                       '<li><a href="">Mundo</a></li>'+
  //                       '<li><a href="">Economía</a></li>'+
  //                       '<li><a href="">Lifestyle</a></li>'+'<li><a href="">Deporte</a></li>');
  // const ulMobile = $('<ul class="side-nav" id="mobile-demo">')
  // const listMobile = $('<li><a href="">Lo último</a></li>'+
  //                       '<li><a href="#">Opinión</a></li>'+
  //                       '<li><a href="">Cultura</a></li>'+
  //                       '<li><a href="">Perú</a></li>'+
  //                       '<li><a href="">Tecología</a></li>'+
  //                       '<li><a href="">Mundo</a></li>'+
  //                       '<li><a href="">Economía</a></li>'+
  //
  //                       '<li><a href="">Lifestyle</a></li>'+'<li><a href="">Deporte</a></li>')
  // ulLeft.append(listLeft);
  // ulRight.append(listRight);
  // ulContent.append(listContent);
  // ulMobile.append(listMobile);
  //
  // navWrapper.append(btnCollapse);
  // navWrapper.append(ulLeft);
  // navWrapper.append(ulRight);
  // navWrapper.append(ulContent);
  // navWrapper.append(ulMobile);
  //
  // nav.append(navWrapper);
  // nav.append(line);
  // nav.append(logo);
  //
  // return nav;
}

const Noticias = (data) =>{
  const container = $('<div class="container"></div>');
  const containerRow = $('<div class="row"></div>');
  const noticia1 = $('<div class="col s12 seccion1"><img class="responsive-img" src="assets/img/'+data[0].img+'"/></div>');
  const textNoticia1 = $('<div class="seccion1__texto col s10"><h4>'+data[0].title+'</h4><h6>'+data[0].brief+'</h6></div>');
  const noticia2 = $('<div class="col s6 seccion2"><img class="responsive-img" src="assets/img/'+data[1].img+'"/></div>');
  const textNoticia2 = $('<div class="seccion2__texto col s10"><h5>'+data[1].title+'</h5></div>')
  const noticia3  = $('<div class="col s3"><img class="responsive-img" src="assets/img/'+data[3].img+'"></img></div>');

  noticia1.append(textNoticia1);
  noticia2.append(textNoticia2);


  containerRow.append(noticia1);
  containerRow.append(noticia2);
  containerRow.append(noticia3);

  container.append(containerRow);
  return container;
}

'use strict';


const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

},{}]},{},[1])