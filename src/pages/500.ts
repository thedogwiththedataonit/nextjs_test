import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(500).json({ message: "Internal Server Error" });
}
