import React from 'react';
import './footer.css';
import Logo from '../../assets/images/corebiz.png';
import Vtex from '../../assets/images/vtex.png';
import Fone from '../../assets/images/ico-headphone.png'
import Email from '../../assets/images/ico-email.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="address">
            <div className="container-address">
                <div>
                    <h3>localização</h3>
                    <span/>
                    <h5>Avenida Andrômeda, 200. Bloco 6 e 8</h5>
                    <h5>Alphavile SP</h5>
                    <h5>brasil@corebiz.ag</h5>
                    <h5>+55 11 3090 1039</h5>
                </div>
                <div className="buttons">
                    <button>
                        <img src={Fone} alt="fone" />
                        <h4>ENTRE EM CONTATO</h4>
                    </button>
                    <button>
                        <img src={Email} alt="email" />
                        <h4>FALE COM O NOSSO CONSULTOR ONLINE</h4>
                    </button>
                </div>

                <div className="info">
                    <div className="corebiz">
                        <p>Created by</p>
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className="vtex">
                        <p>Powered by</p>
                        <img src={Vtex} alt="vtex"/>
                    </div>
                </div>
            </div>
        </div>
    );
}