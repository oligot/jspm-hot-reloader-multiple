import m from 'mithril';

function view() {
  return m('h1', 'Welcome to site one');
}

m.mount(document.getElementById('app'), { view });
