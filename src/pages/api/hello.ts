import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (["GET", "POST"].includes(req.method || "")) {
    throw new Error("please give me a 500 error here");
    res.status(200).json({ message: "This will never execute" });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
