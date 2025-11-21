"use client";

import { useState } from "react";

export default function Wallet() {
  const [privateKey, setPrivateKey] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState<number | null>(null);

  // Генерация кошелька (пример, позже можно заменить на API)
  async function generate() {
    // здесь будет вызов API для генерации кошелька
    const r = {
      privateKey: "PRIVATE_KEY_SAMPLE",
      address: "TXXXXXXX_SAMPLE_ADDRESS",
    };
    setPrivateKey(r.privateKey);
    setAddress(r.address);
    setBalance(null);
  }

  // Проверка баланса
  async function checkBalance() {
    if (!address) return;
    // здесь будет вызов API для получения баланса
    const r = { balance: Math.floor(Math.random() * 100) }; // пример
    setBalance(r.balance);
  }

  // Отправка TRX
  async function send() {
    const to = prompt("Кому отправить?");
    const amount = prompt("Сколько TRX?");
    if (!to || !amount) return;

    // здесь будет вызов API для отправки
    const r = { txid: "TXID_SAMPLE" }; // пример
    alert("TX ID: " + r.txid);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-[#121212] text-white">
      <h1 className="text-2xl font-bold text-[#FF6A00] mb-6">Tron Wallet</h1>

      <button
        onClick={generate}
        className="bg-[#FF6A00] text-black font-bold py-2 px-4 rounded w-full mb-4 transition-transform transform hover:scale-105"
      >
        Создать кошелёк
      </button>

      {address && (
        <div className="bg-[#1E1E1E] p-4 rounded w-full space-y-4">
          <div>
            <p className="text-gray-400 text-sm">Адрес:</p>
            <p className="break-all">{address}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Приватный ключ:</p>
            <p className="break-all">{privateKey}</p>
          </div>

          <button
            onClick={checkBalance}
            className="bg-[#FF6A00] text-black font-bold py-2 px-4 rounded w-full transition-transform transform hover:scale-105"
          >
            Проверить баланс
          </button>

          {balance !== null && (
            <p className="text-orange-400 font-semibold text-center">Баланс: {balance} TRX</p>
          )}

          <button
            onClick={send}
            className="bg-[#FF6A00] text-black font-bold py-2 px-4 rounded w-full transition-transform transform hover:scale-105"
          >
            Отправить TRX
          </button>
        </div>
      )}
    </div>
  );
}