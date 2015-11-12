import m from 'mithril';

function view() {
  return m('h1', 'Welcome to site two');
}

m.mount(document.getElementById('app'), { view });
