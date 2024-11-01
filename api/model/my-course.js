const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  courses: {
    type: Schema.Types.Array,
    default: []
  }
});

const MyCourse = mongoose.model("MyCourse", schema, "myCourse");

module.exports = MyCourse;
