import TronWeb from "tronweb";

export const tron = new TronWeb({
  fullHost: "https://api.trongrid.io",
});

// Генерация
export function generateWallet() {
  const account = tron.utils.accounts.generateAccount();
  return {
    privateKey: account.privateKey,
    address: account.address.base58,
  };
}

// Баланс
export async function getBalance(address: string) {
  const balance = await tron.trx.getBalance(address);
  return balance / 1_000_000; // TRX
}

// Отправка
export async function sendTRX(privateKey: string, to: string, amount: number) {
  const tronPk = new TronWeb({
    fullHost: "https://api.trongrid.io",
    privateKey,
  });

  const tx = await tronPk.trx.sendTransaction(to, amount * 1_000_000);
  return tx;
}