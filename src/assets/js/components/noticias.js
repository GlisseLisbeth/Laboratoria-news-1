const Noticias = (update,data) =>{

  const containerRow = $('<div class="row"></div>');
  const noticia1 = $('<div class="col s12 noticia1-click"></div>');
  const textNoticia1 = $('<img class="responsive-img" src="assets/img/'+data[0].img+'"/><div class="noticia1-click__texto col s10"><h5>'+data[0].title+'</h5><h6>'+data[0].brief+'</h6></div>');
  const noticia2 = $('<div class="col s12 m6 noticia2"></div>');
  const textNoticia2 = $('<div class="noticia2__bg"><img class="responsive-img" src="assets/img/'+data[1].img+'"/></div><div class="noticia2__texto"><h5>'+data[1].title+'</h5></div></div>')
  const noticia3 = $('<div class="col s12 m3 noticia3"></div>');
  const textNoticia3 = $('<div class="noticia3__bg"><img class="responsive-img col s6 m12" src="assets/img/'+data[2].img+'"/></div><div class="noticia3__texto col s6 m12"><h5>'+data[2].title+'</h5></div></div>')
  const noticia4 = $('<div class="col s12 m3 noticia4"></div>');
  const textNoticia4 = $('<div class="noticia4__bg"><img class="responsive-img col s6 m12" src="assets/img/'+data[3].img+'"/></div><div class="noticia4__texto col s6 m12"><h5>'+data[3].title+'</h5></div></div>');
  const menu = $('<ul class="center-align nav__menu hide-on-small-only"><li><a href="">Lo último</a></li><li><a href="#">Opinión</a></li><li><a href="">Cultura</a></li><li><a href="">Perú</a></li><li><a href="">Tecnología</a></li><li><a href="">Mundo</a></li><li><a href="">Economía</a></li><li><a href="">Lifestyle</a></li><li><a href="">Deporte</a></li></ul>');

  noticia1.on('click', ()=>{
    state.noticiaSelected = data[0];
    update();
  })

  noticia1.append(textNoticia1);
  noticia2.append(textNoticia2);
  noticia3.append(textNoticia3);
  noticia4.append(textNoticia4);

  containerRow.append(menu);
  containerRow.append(noticia1);
  containerRow.append(noticia2);
  containerRow.append(noticia3);
  containerRow.append(noticia4);

  return containerRow;
}
