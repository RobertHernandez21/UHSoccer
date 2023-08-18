let mongoose = require('mongoose');
let Schema = mongoose.Schema;

detailSchema = new Schema( {
	unique_id:Number,
	Name: String,
	Position: String, // Add this line for "Position"
  	Number: Number, 
	image1:String,
	added_date:{
		type: Date,
		default: Date.now
	}
}),
Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;