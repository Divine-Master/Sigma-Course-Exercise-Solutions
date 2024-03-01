const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `${url}`;

    script.onload = () => {
      resolve(script);
    };

    script.onerror = () => {
      reject(new Error(`Could not load script from ${url}`));
    };

    document.head.appendChild(script);
  });
};

loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js')
  .then((script) => {
    console.log('Script loaded successfully');
  })
  .catch((error) => {
    console.error(error);
  });