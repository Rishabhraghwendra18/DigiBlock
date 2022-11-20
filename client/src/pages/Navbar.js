import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../Constants";
import { CONTRACT_ABI } from "../Constants";
import "./Navbar.css";
import Logo from "../assets/Logo.png"

function Navbar({ isMainApp,setUserAddress=()=>{} }) {

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
      setUserAddress(accounts[0]);
      console.log("accounts: ", accounts[0]);
      // await readNotice(provider);
    } else {
      setMsg("Install MetaMask");
    }
  };

  return (
    <div className="nav__container">
      <div>
        <div className="nav__logocontainer">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="nav__buttoncontainer">
          {isMainApp ? (
            <button className="nav__button" onClick={connectButton}>
              {publicKey !== undefined && publicKey !== null ? `${publicKey?.slice(0, 7)}...${publicKey?.slice(35)}` : "Connect Wallet"}
            </button>
          ) : (
            <a className="nav__button" href="http://app.localhost:3000">
              LAUNCH APP
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
