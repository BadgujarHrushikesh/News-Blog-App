const mongoose = require('mongoose');

const postedBySchema = new mongoose.Schema({
    name: { type: String, required: 'Name is required' },
    email: { type: String, required: 'Email is required' }
});

const newsItemSchema = new mongoose.Schema(
    {
        title: { type: String, required: 'Title is required' },
        // img: { type: String, required: 'Img is required'},
        description: { type: String, required: 'Description is required' },
        content: { type: String, required: 'Content is required' },
        postedBy: { type: postedBySchema, required: 'PostedBy is required' }
    },
    {
        timestamps: true
    }
);

const NewsItemModel = mongoose.model('NewsItem', newsItemSchema);

module.exports = NewsItemModel;
