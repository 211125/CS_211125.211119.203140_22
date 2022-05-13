const express = require('express');
const router = express.Router();

route.get('/succes1', function(req, res) {
   res.send({
       success: 'success1',
   });
})

route.get('/succes2', function(req, res) {

    res.send({
        success: 'success2',
    })
})



module.exports = router;