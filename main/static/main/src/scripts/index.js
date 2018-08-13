if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(sw) // Found in base.html
    .then(() => {
      console.log('Successfully registered');
    });
}
