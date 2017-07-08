const NoticiaPrincipal = () =>{
  const containerRow = $('<div class="row"></div>');
  const line1 = $('<hr>');
  const title = $('<h5>EDUCACIÓN</h5>');
  const lineTitle  = $('<hr class="hr-title">');
  const titleNoticia = $('<div class = "col s12"><h3>'+state.noticiaSelected.title+'</h3></div>');
  const subNoticia = $('<div class="col s6 m6"><p>'+state.noticiaSelected.brief+'</p></div>');
  const fondo = $('<div class="col s12"><img class="responsive-img" src="assets/img/foto-n1.png"/></div>');
  const line2 = $('<hr class= "line-title">');
  const textoNoticia = $('<div class="col s9"></div>');

  const autor = $('<div class="col s12"><div class="col s2 "><img class="responsive-img img-autor" src="assets/img/'+state.noticiaSelected.author.picture+'"/></div></div>')
  const infoAutor = $('<div class="col s5"><p>'+state.noticiaSelected.author.name+'</p>'+
                      '<p>'+state.noticiaSelected.author.user+'</p></div>');
  const infoNoticia = $('<div class="col s12"><p>'+state.noticiaSelected.body+'</p></div>')

  const articulosNoticia = $('<div class="col s3"></div>');

  const notasNoticia = $('<div class="col s12"><div class="col s12"><h6 class="text-notas">NOTAS RELACIONADAS</h6><hr class="hr-title"/></div></div>');
  const imgNoticia1 = $('<div class="col s6"><img class="responsive-img" src="assets/img/foto-n3.png"/><p class="text-notas-min">Laboratoria2017</p></div>');
  const imgNoticia2 = $('<div class="col s6"><img class="responsive-img" src="assets/img/foto-n4.png"/><p class="text-notas-min">Laboratoria2017</p></div>');

  const popularNoticia = $('<div class="col s12"><div class="col s12"><h6 class="text-notas">MÁS POPULARES</h6><hr class="hr-title"/><div></div>');
  const imgPopular1  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n5.png"/><p class="col s6 text-notas-min">Laboratoria2017</p></div>');
  const imgPopular2  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n6.png"/><p class="col s6 text-notas-min">Laboratoria2017</p></div>');
  const imgPopular3  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n7.png"/><p class="col s6 text-notas-min">Laboratoria2017</p></div>');
  const imgPopular4  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n8.png"/><p class="col s6 text-notas-min">Laboratoria2017</p></div>');
  const imgPopular5  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n9.png"/><p class="col s6 text-notas-min">Laboratoria2017</p></div>');
  containerRow.append(line1);
  containerRow.append(title);
  containerRow.append(lineTitle);
  containerRow.append(titleNoticia);
  containerRow.append(subNoticia);
  containerRow.append(fondo);
  containerRow.append(line2);

  autor.append(infoAutor);
  textoNoticia.append(autor);
  textoNoticia.append(infoNoticia);

  notasNoticia.append(imgNoticia1);
  notasNoticia.append(imgNoticia2);

  popularNoticia.append(imgPopular1);
  popularNoticia.append(imgPopular2);
  popularNoticia.append(imgPopular3);
  popularNoticia.append(imgPopular4);
  popularNoticia.append(imgPopular5);

  articulosNoticia.append(notasNoticia);
  articulosNoticia.append(popularNoticia);


  containerRow.append(textoNoticia);
  containerRow.append(articulosNoticia);


  return containerRow;
}
