import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IProduct, Product } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IProduct
  | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(res);

    case "POST":
      return postProduct(req, res);

    default:
      return res.status(400).json({ message: "Endpoint no existe" });
  }
}

const getProducts = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const products = await Product.find().sort({ createdAt: "ascending" });

  await db.disconnect();

  res.status(200).json(products);
};

const postProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { price, productName, description, productImage = "" } = req.body;

  const newProduct = new Product({
    price,
    productName,
    description,
    productImage,
  });

  try {
    await db.connect();

    await newProduct.save();

    await db.disconnect();

    return res.status(201).json(newProduct);
  } catch (error) {
    await db.disconnect();
    return res.status(500).json({ message: "mal" });
  }
};
