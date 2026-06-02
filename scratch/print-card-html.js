const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const cardStart = data.indexOf('<article id="curso-');
    if (cardStart !== -1) {
      const cardEnd = data.indexOf('</article>', cardStart);
      console.log(data.substring(cardStart, cardEnd + 10));
    } else {
      console.log("No card found");
    }
  });
});
