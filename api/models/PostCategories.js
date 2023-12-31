const mongoose = require('mongoose');

const PostCategoriesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("PostCategories", PostCategoriesSchema);


