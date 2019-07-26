var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleFun = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String
	},
	link: {
		type: String,
		required: true
	},
	memo: {
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}
});

var Article = mongoose.model("Article", ArticleFun);

module.exports = Article;