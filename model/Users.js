import { getData } from './db.js';
import { Sequelize } from 'Sequelize';

const User = getData.sequelizeClient.define('tbl_usersdb', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone_number: Sequelize.STRING,

}, {
    tablename: 'tbl_usersdb'
});

export const getUsers = User;