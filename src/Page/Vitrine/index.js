import React from 'react';
//import Categoria from '../../components/Categoria';
import Cervejas from '../../components/Produto/Cervejas';
import Destilados from '../../components/Produto/Destilados';
import Vinhos from '../../components/Produto/Vinhos';
import SemAlcool from '../../components/Produto/SemAlcool';
import Petiscos from '../../components/Produto/Petiscos';
import Outros from '../../components/Produto/Outros';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../global.css';
import './style.css';


export default function Vitrine(){
    return(
        <>
            <Header />
                <div className='main'>
                    <Cervejas />
                    <Destilados />
                    <Vinhos/>
                    <SemAlcool />
                    <Petiscos />
                    <Outros />
                </div>
            <Footer />
        </>
    );
}

