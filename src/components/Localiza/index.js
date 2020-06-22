import React from 'react';
import Endereco from './Endereco';

import './styles.css';

export default function Localiza(){
    return(
        <div className="localiza">
            <h1 className="titulo"><strong>Bebidas geladas</strong> a <strong>preço </strong> 
             de mercado na sua casa <strong>agora</strong></h1>
            <Endereco />           
        </div>
    );
}