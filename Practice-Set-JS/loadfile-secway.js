const loadScript = async (url) => {
  const script = document.createElement('script');
  script.src = url;

  document.head.appendChild(script);

  await new Promise((resolve, reject) => {
    script.onload = () => {
      resolve(script);
    };

    script.onerror = () => {
      reject(new Error(`Could not load script from ${url}`));
    };
  });

  return script;
};

(async () => {
  try {
    const script = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js');
    console.log(script)
    console.log('Script loaded successfully');
  } catch (error) {
    console.error(error);
  }
})();