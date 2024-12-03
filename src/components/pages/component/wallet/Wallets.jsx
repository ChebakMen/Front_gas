import React from "react";
import "./Wallets.css"

import MetaMask from "./../../../../image/MetaMask.svg"
import ExodusWallet from "./../../../../image/ExodusWallet.svg"
import TrustWallet from "./../../../../image/TrustWallet.svg"
import CoinbaseWallet from "./../../../../image/CoinbaseWallet.svg"
import RightWallet from "./../../../../image/right_wallet.svg"


function Wallet()
{
    return (
        <div className="wallet_wrapper">
            <ul className="wallet__inner">
                <li className="wallet__items">
                    <a className="wallet__item" target="_blank" href="https://metamask.io">
                        <img src={MetaMask} alt="Meta Mask" /> 
                        <p>MetaMask</p>
                        <img src={RightWallet} alt="Right Wallet" />
                    </a>
                </li>
                <li className="wallet__items">
                    <a className="wallet__item" target="_blank" href="https://www.exodus.com/">
                        <img src={ExodusWallet} alt="Exodus Wallet" /> 
                        <p>Exodus Wallet</p> 
                        <img src={RightWallet} alt="Right Wallet" />
                    </a>
                </li>
                <li className="wallet__items">
                    <a className="wallet__item" target="_blank" href="https://trustwallet.com/ru">
                        <img src={TrustWallet} alt="Trust Wallet" /> 
                        <p>Trust Wallet</p> 
                        <img src={RightWallet} alt="Right Wallet" />
                    </a>
                </li>
                <li className="wallet__items">
                    <a className="wallet__item" target="_blank " href="https://www.coinbase.com">
                        <img src={CoinbaseWallet} alt="Coinbase Wallet" /> 
                        <p>Coinbase Wallet</p> 
                        <img src={RightWallet} alt="Right Wallet" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export {Wallet};