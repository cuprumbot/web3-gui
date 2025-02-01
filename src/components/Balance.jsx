import { useReadContract } from 'wagmi'
import { arbitrumSepolia } from "wagmi/chains";
import { formatEther } from 'viem';

export default function Balance () {
  const { data: balance, isLoading, isError } = useReadContract({
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
    functionName: 'getBalance',
    chainId: arbitrumSepolia.id,
  })

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error: {isError.message}</p>}
      {balance && <p>Ether Wallet balance: {formatEther(balance)} ETH</p>}
    </div>
  )
}