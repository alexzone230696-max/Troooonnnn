import { useState } from "react";

export default function Wallet() {
  const [privateKey, setPrivateKey] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState<number | null>(null);

  async function generate() {
    const r = await fetch("/api/generate").then(r => r.json());
    setPrivateKey(r.privateKey);
    setAddress(r.address);
  }

  async function checkBalance() {
    const r = await fetch(`/api/balance?address=${address}`).then(r => r.json());
    setBalance(r.balance);
  }

  async function send() {
    const to = prompt("Кому отправить?");
    const amount = prompt("Сколько TRX?");
    if (!to || !amount) return;

    const r = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ privateKey, to, amount })
    }).then(r => r.json());

    alert("TX ID: " + r.txid);
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={generate}>Создать кошелёк</button>

      {address && (
        <>
          <p>Адрес: {address}</p>
          <p>Приватный ключ: {privateKey}</p>

          <button onClick={checkBalance}>Проверить баланс</button>
          {balance !== null && <p>Баланс: {balance} TRX</p>}

          <button onClick={send}>Отправить TRX</button>
        </>
      )}
    </div>
  );
}