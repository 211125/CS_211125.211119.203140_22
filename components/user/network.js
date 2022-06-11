import { Router } from 'express';
import { success } from '../../network/response.js';
import { getUsers } from '../../model/Users.js';

const router = Router();

router.get('/success1', async function (req, res) {
    const client = await getConnection();

    const query_request = {
        text: 'SELECT * FROM tbl_usersdb',
    }
    client.query(query_request)
        .then(r => { success(req, res, r, 200); })
        .catch(e => { success(req, res, e.stack, 400); })
});
router.post('/registroUser', async function (req, res) {
    getUser.create({
        id: req.query.id,
        username: req.query.username,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number

    }).then(users => {
        res.send(users)
    })

})
router.put('/actualizar', async function (req, res) {
    let id = red.query.id
    let nuevoDato = req.query
    getUsers.findOne({ where: { id: id } })
        .then(users => {
            users.update(nuevoDato)
        })
});
router.delete('/eli', async function (req, res) {
    let id = req.query.id;
    console.log("id:" + req.query.id);
    getUsers.destroy({
        where: {
            id: id
        }
    })
        .then((r) => {
            success(req, res, r, 200);
        })
        .catch((e) => {
            success(req, res, e, 200)
        });
});


export default Router;