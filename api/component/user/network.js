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
router.post('/login', function (req, res){
    console.log(req.query.username);
    console.log(req.query.password);
    res.send({
       token : 'token',
       id_users: 'id_user',
       sucess: 'valido'
    });
});
router.post('/register', function (req, res) {
    console.log(req.query.username);
    console.log(req.query.password);
    console.log(req.query.phoneNumber);
    res.send({
        token:'token',
        id_User:'id_user',
        success:'valido',
    });

});


module.exports = router;