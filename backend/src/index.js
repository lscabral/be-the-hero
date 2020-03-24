const express = require('express');
const routes = require('./routes')
const cors = require('cors')
const app = express();

app.use(cors());

/**app.use(cors({
    origin: 'http://meuapp.com' //que endereço pode acessar meu backend
}));
*/
app.use(express.json());
app.use(routes);

app.listen(3333);

