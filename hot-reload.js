(function() {
  var readyForMainLoad;
  if (location.origin.match(/localhost/)) {
    System.trace = true;
    readyForMainLoad = System.import('systemjs-hot-reloader').then(function(HotReloader) {
      var url = 'http://' + document.location.hostname + ':' + document.location.port;
      hr = new HotReloader.default(url, function (path) {
        return path.replace(document.location.pathname.slice(1), '');
      });
    });
  }
  Promise.resolve(readyForMainLoad).then(() => {
    System.import('app').then(function () {
      console.log('ran at ', new Date());
    });
  });
})();
