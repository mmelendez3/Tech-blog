const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Duis aute irure dolor',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'aute irure dolor in reprehenderit in voluptate velit',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;