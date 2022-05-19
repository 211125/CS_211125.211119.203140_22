const express = require('express');

const router = express.Router();

router.get('/s',function (req, res) {
    res.send({
        success:"succes 1",
    });
})
router.post('/login', function (req, res) {

    let userName = req.query.userName;
    let pasword = req.query.pasword;

    res.send({
        token: "",
        id_user: "1",
        success: "exito",
    })
})

router.post('/register', function (req, res) {

    let email = req.query.email
    let pasword = req.query.pasword
    let numberPhone = req.query.numberPhone

    res.send({
        token: "1234",
        id_user: "1",
        success: "exito",
    })
})

module.exports = router;