var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MemoFun = new Schema({
    title: {
		type: String
	},
	body: {
		type: String
	}
});


var Memo = mongoose.model("Memo", MemoFun);

module.exports = Memo;