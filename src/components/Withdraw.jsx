import { useWriteContract } from 'wagmi';
import { useSendTransaction } from 'wagmi';
import { arbitrumSepolia } from "wagmi/chains";
import { parseEther } from 'viem';
import { useState } from 'react';

export default function Withdraw () {
    const [ amount, setAmount ] = useState('');
    const { data: hash, writeContract } = useWriteContract()

    const submit = async (e) => {
        console.log("starting submit...")
        console.log(writeContract);
        e.preventDefault();
        writeContract(
            {
                address: "0x3436f752b1b93e02639BdF875087B8D3a811A25B",
                abi: [
                    {
                        "stateMutability": "payable",
                        "type": "receive"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "withdraw",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [],
                        "name": "getBalance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address payable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                functionName: "withdraw",
                chainId: arbitrumSepolia.id,
                args: [parseEther(amount)],
            },
            {
                onSuccess: (tx) => console.log("Transaction sent:", tx),
                onError: (err) => console.error("Transaction error:", err),
            }
        )
    };

    return (
        <form onSubmit={submit}>
          <input
            name="amount"
            placeholder="0.01"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Retirar ETH</button>
          {hash && <div>Transaction Hash: {hash}</div>}
        </form>
    );
}