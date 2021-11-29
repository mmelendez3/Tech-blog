const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'yuuki1',
        email: 'test540@gmail.com',
        password: 'password123'
    },
    {
        username: 'duke21',
        email: 'player32@protonmail.com',
        password: 'password1234'
    },
    {
        username: 'butch34',
        email: 'apple@icould.com',
        password: 'password1235'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;