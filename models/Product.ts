import mongoose, { Model, Schema } from "mongoose";
import { Product } from "../interfaces";

export interface IProduct extends Product {}

const entrySchema = new Schema({
  price: { type: Number, required: true },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productImage: { type: String },
});

const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model("Product", entrySchema);

export default ProductModel;
