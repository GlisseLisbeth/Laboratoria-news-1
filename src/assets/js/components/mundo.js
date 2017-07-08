const Mundo = (update, data) =>{
  const containerRow = $('<div class="row"></div>');
  const title = $('<h5>MUNDO</h5>');
  const line = $('<hr class="hr-title">');
  const noticia1 = $('<div class="col s12 m3 noticia1"></div>');
  const textNoticia1 = $('<div class="noticia1__bg"><img class="responsive-img" src="assets/img/'+data[4].img+'"/><div class="noticia2__texto"><h5>'+data[4].title+'</h5></div></div>')
  const noticia2 = $('<div class="col s12 m6 noticia2"></div>');
  const noticia2_1 = $('<div class="col s6"><div class="noticia2__bg">'+
                        '<img class="responsive-img" src="assets/img/'+data[5].img+'"/>'+
                        '<div class="noticia3__texto"><h5>'+data[5].title+'</h5></div<div></div>');
  const noticia2_2 = $('<div class="col s6"><div class="noticia2__bg">'+
                        '<img class="responsive-img" src="assets/img/'+data[6].img+'"/>'+
                        '<div class="noticia3__texto"><h5>'+data[6].title+'</h5></div<div></div>');
  const noticia2_3 = $('<div class="col s12"><div class="noticia2__bg">'+
                        '<img class="responsive-img col s6" src="assets/img/'+data[8].img+'"/>'+
                        '<div class="noticia3__texto col s6"><h5>'+data[8].title+'</h5></div<div></div>');
  const noticia2_4 = $('<div class="col s12"><div class="noticia2__bg">'+
                        '<img class="responsive-img col s6" src="assets/img/'+data[9].img+'"/>'+
                        '<div class="noticia3__texto col s6"><h5>'+data[9].title+'</h5></div<div></div>');
  const noticia3 = $('<div class="col s12 m3 noticia3 hide-on-small-only"></div>');
  const textNoticia3 = $('<div class="noticia3__bg"><img class="responsive-img" src="assets/img/'+data[7].img+'"/><div class="noticia2__texto"><h5>'+data[7].title+'</h5></div></div>');
  const noticia4 = $('<div class="col s12 m4 noticia4"></div>');
  const textNoticia4 = $('<div class="noticia4__bg"><img class="responsive-img" src="assets/img/'+data[10].img+'"/><div class="noticia2__texto"><h5>'+data[10].title+'</h5></div></div>');
  const noticia5 = $('<div class="col s12 m4 noticia5"></div>');
  const textNoticia5 = $('<div class="noticia5__bg"><img class="responsive-img" src="assets/img/'+data[11].img+'"/><div class="noticia2__texto"><h5>'+data[11].title+'</h5></div></div>');
  const noticia6 = $('<div class="col s12 m4 noticia6"></div>');
  const textNoticia6 = $('<div class="noticia6__bg"><img class="responsive-img" src="assets/img/'+data[12].img+'"/><div class="noticia2__texto"><h5>'+data[12].title+'</h5></div></div>');
  noticia1.append(textNoticia1);
  noticia2.append(noticia2_1);
  noticia2.append(noticia2_2);
  noticia2.append(noticia2_3);
  noticia2.append(noticia2_4);
  noticia3.append(textNoticia3);
  noticia4.append(textNoticia4);
  noticia5.append(textNoticia5);
  noticia6.append(textNoticia6);

  containerRow.append(title);
  containerRow.append(line);
  containerRow.append(noticia1);
  containerRow.append(noticia2);
  containerRow.append(noticia3);
  containerRow.append(noticia4);
  containerRow.append(noticia5);
  containerRow.append(noticia6);

  return containerRow;
}
