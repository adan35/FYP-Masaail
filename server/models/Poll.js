let mongoose = require("mongoose");
let uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
let PollSchema = new mongoose.Schema(
	{

    title: {
        type: String,
        required: true,
    },

    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    polls: [
      {
        name: String,
        votedBy: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          }
        ]
      }
    ],
	},
	{ timestamps: true }
);

PollSchema.plugin(uniqueValidator, { message: "is already taken." });
PollSchema.plugin(mongoosePaginate);


var autoPopulate = function (next) {
  this.populate("polls.votedBy");
	next();
};

PollSchema.pre("findOne", autoPopulate);
PollSchema.pre("find", autoPopulate);


PollSchema.methods.toJSON = function () {
	return {
    _id: this._id,
    by: this.by,
    polls: this.polls,
    createdAt: this.createdAt,
	};
};

module.exports = mongoose.model("Poll", PollSchema);
