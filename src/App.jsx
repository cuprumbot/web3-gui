import './App.css'

import { Web3Provider } from './components/Web3Provider.jsx';
import { ConnectKitButton } from 'connectkit';
import Balance from "./components/Balance.jsx";
import Deposit from "./components/Deposit.jsx";
import Withdraw from "./components/Withdraw.jsx";

function App() {
  return (
    <>
    <Web3Provider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '20vh' }}>
        <p>Conecta tu billetera:</p>
        <ConnectKitButton />
      </div>

      <Balance />
      <Deposit />
      <Withdraw />
    </Web3Provider>
    </>
  )
}

export default App
