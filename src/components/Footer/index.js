import React from 'react';
import './styles.css';

import logo from '../../assets/logoC.png';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

export default function Footer(){
    return(
        <div className="footer" >
            <div className="line_one">
                <div>
                    <img src={logo} alt="Lodo do Zé" className="logo-footer" />
                </div>
                <div className="redes_sociais">
                    <img src={twitter} alt="icon twitter" className="twitter"/>
                    <img src={facebook} alt="icon facebook" className="facebook"/>
                    <img src={instagram} alt="icon instagram" className="instagram"/>
                </div>
            </div>
            <div className="line_two">
                <h6>Cidades atendidas</h6>
                <div>Cutiriba</div>
                <div>Belo Horizonte</div>
                <div>Recife</div>
                <div>Rio de Janeiro</div>
                <div>São Paulo Capital</div>
                <div>São Paulo Interior</div>
                <div>São Paulo Litoral</div>
            </div>
            <div className="line_three">
                <p>© 2020 Zé Delivery - Todos os direitos reservados.</p>
            </div>
        </div>
    );
}