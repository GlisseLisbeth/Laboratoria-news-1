'use strict';

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper container"></div>');
  wrapper.append(Header());
  
  if (state.noticiaSelected != null) {
    wrapper.append(NoticiaPrincipal());
  } else{
    wrapper.append(Noticias(_ => render(root),data));
    wrapper.append(Mundo(_ => render(root),data));
  }

  root.append(wrapper);
}

const state = {
  noticiaSelected: null
};


$( _ => {
  getJSON('/api/news/', (err, json) => {
    if (err) { return alert(err.message);}

    var id = json[0];
    console.log(id);

    const root = $('.root');
    render(root,json);
    console.log(json);
  });
  $(".button-collapse").sideNav();
});
