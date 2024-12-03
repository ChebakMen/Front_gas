import BadExchanges from './BadList/BadLists';
import { Wallet } from './../component/wallet/Wallets';

import './../exchanger.css'

import { ValueCoin } from './../component/valueCoin/ValueCoin';

function BadExchanger (){
    return (
        <div className="exchanger__wrapper">
            <div className="container">
                <div className="exchanger__items">
                    <aside className='exchanger__aside'>
                        <div className="exchanger__wallet">
                            <Wallet />
                        </div>
                        <div className="exchanger__coin">
                            <ValueCoin />
                        </div>
                    </aside>
                    <section className='exchanger__section'>
                        <div className="exchenger-item">
                            <BadExchanges />
                        </div>
                    </section>
                </div>
                <div className="form_image">
                    {/* <ExchengersForm /> */}
                </div>
                {/* <Tester /> */}
                {/* <Tets /> */}
             </div>
            
        </div>
    )
}

export {BadExchanger};