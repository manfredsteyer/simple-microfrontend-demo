const cpr = require('cpr');

cpr('dist/client-a/main.js', 'src/assets/micro-frontends/client-a/main.js', { overwrite: true });
cpr('dist/client-b/main.js', 'src/assets/micro-frontends/client-b/main.js', { overwrite: true });

