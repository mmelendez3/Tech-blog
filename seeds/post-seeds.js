const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem ipsum dolor sit amet',
        description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user_id: 1
    },
    {
        title: 'Ut enim ad minim veniam',
        description: 'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        user_id: 2
    },
    {
        title: 'Duis aute irure dolor in reprehenderit',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;