const mongoose = require("mongoose");
const Joi = require("joi");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    minlength: 4,
    maxlength: 50,
  },
  vendor: {
    type: String,
    required: [true, "Vendor name is required."],
    minlength: 4,
    maxlength: 100,
  },
  date: {
    type: Date,
    required: [true, "Date is required."],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required."],
    min: 1,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  availablequantity: {
    type: Number,
    required: [true, "Available quantity is required."],
    min: 1,
  },
  damagequantity: {
    type: Number,
    required: [true, "Damage quantity is required."],
    min: 1,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

const validateContact = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    vendor: Joi.string().min(4).max(100).required(),
    date: Joi.date().iso().required(),
    quantity: Joi.number().min(1).required(),
    description: Joi.string().min(10).required(),
    availablequantity: Joi.number().min(1).required(),
    damagequantity: Joi.number().min(1).required(),
  });

  return schema.validate(data);
};

module.exports = {
  validateContact,
  Contact,
};
