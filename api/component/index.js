const express = require('express');
const config =require ('../../../config.js');
const user = require ('./network')

const app = express();


app.use('/api/user', user)


app.listen(config.api.port, () => {
    console.log(`Servidor corriendo en el puerto => ${config.api.port}` )
});

