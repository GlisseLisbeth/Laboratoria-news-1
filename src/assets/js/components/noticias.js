const Noticias = (data) =>{
  const container = $('<div class="container"></div>');
  const containerRow = $('<div class="row"></div>');
  const noticia1 = $('<div class="col s12 seccion1"><img class="responsive-img" src="assets/img/'+data[0].img+'"/></div>');
  const textNoticia1 = $('<div class="seccion1__texto col s10"><h4>'+data[0].title+'</h4><h6>'+data[0].brief+'</h6></div>');
  const noticia2 = $('<div class="col s6 seccion2"><img class="responsive-img" src="assets/img/'+data[1].img+'"/></div>');
  const textNoticia2 = $('<div class="seccion2__texto col s10"><h5>'+data[1].title+'</h5></div>')
  const noticia3  = $('<div class="col s3"><img class="responsive-img" src="assets/img/'+data[3].img+'"></img></div>');
  const textNoticia3 = $('<div></div>');

  const divNoticias = (img, noticia) =>{
    const noticia2 = $('<div class="col s6 seccion2"><img class="responsive-img" src="assets/img/'+data[1].img+'"/></div>');
    const textNoticia2 = $('<div class="seccion2__texto col s10"><h5>'+data[1].title+'</h5></div>')
  }

  noticia1.append(textNoticia1);
  noticia2.append(textNoticia2);


  containerRow.append(noticia1);
  containerRow.append(noticia2);
  containerRow.append(noticia3);

  container.append(containerRow);
  return container;
}
