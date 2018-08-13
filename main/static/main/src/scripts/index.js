if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js') // Found in base.html
    .then(() => {
      // console.log('Successfully registered');
    });
}
