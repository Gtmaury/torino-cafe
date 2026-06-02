const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const idx = data.indexOf('Barista Básico');
    if (idx !== -1) {
      console.log(data.substring(idx - 500, idx + 1000));
    } else {
      console.log("Not found");
    }
  });
});
