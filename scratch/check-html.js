const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log("HTML length:", data.length);
    // Find all '<a>' tags and their corresponding closing '</a>'
    let pos = 0;
    while (true) {
      const idx = data.indexOf('<a ', pos);
      if (idx === -1) break;
      const endIdx = data.indexOf('>', idx);
      const tag = data.substring(idx, endIdx + 1);
      const closeIdx = data.indexOf('</a>', endIdx);
      console.log(`Found link: ${tag} -> Close tag found: ${closeIdx !== -1 ? 'YES' : 'NO'} at distance ${closeIdx - endIdx}`);
      pos = endIdx + 1;
    }
  });
});
