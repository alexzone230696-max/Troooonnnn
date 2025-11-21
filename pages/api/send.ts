import type { NextApiRequest, NextApiResponse } from "next";
import { sendTRX } from "../../lib/tron";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { privateKey, to, amount } = req.body;

  if (!privateKey || !to || !amount)
    return res.status(400).json({ error: "Missing fields" });

  const result = await sendTRX(privateKey, to, Number(amount));
  res.status(200).json(result);
}