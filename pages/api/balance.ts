import type { NextApiRequest, NextApiResponse } from "next";
import { getBalance } from "../../lib/tron";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query;

  if (!address) return res.status(400).json({ error: "No address" });

  const balance = await getBalance(address.toString());
  res.status(200).json({ balance });
}