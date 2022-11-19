import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./Constants.js";
import { CONTRACT_ABI } from "./Constants.js";
import { BrowserRouter } from 'react-router-dom';
import { getRoute } from './utils/router-helper';
import "./App.css";

export default function App() {
  const [publicKey, setPublickey] = useState();

  const [chainId, setChainId] = useState();
  const [msg, setMsg] = useState();
  const [notice, setNotice] = useState();
  const [noticedBy, setNoticeBy] = useState();
  const [updatedNotice, setUpdatedNotice] = useState();

  const connectButton = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const accounts = await provider.send("eth_requestAccounts", []);
      const { chainId } = await provider.getNetwork();
      setChainId(chainId);
      setPublickey(accounts[0]);
      await readNotice(provider);
    } else {
      setMsg("Install MetaMask");
    }
  };

  const readNotice = async (provider) => {

    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    console.log(contract)
    const notice = await contract.getNotice();
    console.log(notice);
    setNotice(notice);
    const noticeBy = await contract.getUserByNotice(notice);
    setNoticeBy(noticeBy);

  }

  const writeNotice = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    console.log(contract)
    console.log(updatedNotice)
    let tx = await contract.setNotice(updatedNotice, {
      gasLimit: 1000000000, // BlockGasLimit / 10
    });

    console.log(tx)
    await readNotice(provider);
  }
  const CurrentApp = getRoute();
  return (
    <div className="App">
      {/* <About></About>
      <Home></Home>
      <Student></Student>
      <MintStudent></MintStudent> */}
      <BrowserRouter>
        <CurrentApp />
      </BrowserRouter>
    </div>
  );
}
