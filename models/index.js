const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const { Post } = require('../controllers/homeRoutes');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'user_id'
})

module.exports = { User, Post, Comment };
