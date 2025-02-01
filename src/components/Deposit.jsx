import { useWriteContract } from 'wagmi';
import { useSendTransaction } from 'wagmi';
import { arbitrumSepolia } from "wagmi/chains";
import { parseEther } from 'viem';
import { useState } from 'react';

export default function Deposit () {
  const { data: hash, isPending, sendTransaction } = useSendTransaction();

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const to = "0x3436f752b1b93e02639BdF875087B8D3a811A25B";
    const value = formData.get('value');
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <form onSubmit={submit}>
      <input name="value" placeholder="0.01" required />
      <button 
        disabled={isPending}
        type="submit"
      >
        {isPending ? 'Confirmando transacción...' : 'Depositar ETH'}
      </button>
      {hash && <div>Transacción exitosa! Hash: {hash}</div>} 
    </form>
  );
}
