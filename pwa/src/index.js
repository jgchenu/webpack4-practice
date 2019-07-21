console.log('hello world');
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(registeration => {
        console.log('service-worker registed');
      })
      .catch(error => {
        console.log('service-work error');
      });
  });
}
 