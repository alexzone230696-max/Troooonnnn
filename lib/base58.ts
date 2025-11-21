import bs58 from "bs58";
import { createHash } from "crypto";

export function base58CheckEncode(payload: Buffer): string {
  const checksum = createHash("sha256")
    .update(createHash("sha256").update(payload).digest())
    .digest()
    .subarray(0, 4);

  return bs58.encode(Buffer.concat([payload, checksum]));
}