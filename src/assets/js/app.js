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
