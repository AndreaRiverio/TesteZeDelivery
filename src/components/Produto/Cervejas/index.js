import React, { useEffect } from 'react';
import axios from 'axios';
import { BREAK } from 'graphql';
//import ReactImageFallback from 'react-image-fallback';


export default function Cevejas(){
  const [produtos, setProdutos] = React.useState([]);
  const [produtosId, setProdutosId] = React.useState([]);
  const [produtosTitle, setProdutosTitle] = React.useState([]);
  const [imagens, setImagens] = React.useState([]);
  const [imagensUrl, setImagensUrl] = React.useState([]);
  const [produtosVariantes, setProdutosVariantes] = React.useState([]);
  const [produtosPreco, setProdutosPreco] = React.useState([]);
  const [count, setCount]= React.useState([]);
  
    useEffect(() => {

      let pocId = localStorage.getItem('pocId');

      let allCategoria = localStorage.getItem('allCategoria');
      allCategoria= JSON.parse(allCategoria);
      let cervejaId = parseInt(allCategoria[0].id);

      let count= 0;
      setCount(count);
     
      axios({ 
        url: 'https://api.code-challenge.ze.delivery/public/graphql',
        method: 'post',
        data: {
        query: `
          query poc($id: ID!, $categoryId: Int, $search: String){
          poc(id: $id) {
            id
            products(categoryId: $categoryId, search: $search) {
             id
             title
              rgb
              images {
                url
              }
              productVariants {
                availableDate
                productVariantId
                price
                inventoryItemId
                shortDescription
                title
                published
                volume
                volumeUnit
                description
                subtitle
                components {
                  id
                  productVariantId
                  productVariant {
                    id
                    title
                    description
                    shortDescription
                  }
                }
              }
           }
          }
        }`,
        variables: { id: pocId, search: !"", categoryId:cervejaId }
      }
    })
    .then(res => {
     const produtos= res.data.data.poc.products;
     setProdutos(produtos);
      //console.log(produtos);
      //const {id, title, images:{url}, productVariants:{price}} = produtos;
      const produtosId = produtos.map(function (produto, i) {
        return produtos[i].id
      })
      setProdutosId(produtosId);
      const produtosTitle = produtos.map((produto =>  produto.title))
      setProdutosTitle(produtosTitle)
      const imagens = produtos.map(function (imagem, i) {
       return produtos[i].images[0]
     })
     setImagens(imagens)
        const imagensUrl = imagens.map(function (imagem, i){
       return imagens[i].url
     })
     setImagensUrl(imagensUrl)
     const produtosVariantes = produtos.map(function (produto, i) {
       return produtos[i].productVariants[0]
     })
     setProdutosVariantes(produtosVariantes)
     const produtosPreco = produtosVariantes.map(function (produto, i){
       return produtosVariantes[i].price
     })
      setProdutosPreco(produtosPreco)
     });
    }, []);

return( 
  <div className='containerProduto'>
    <p>Cervejas</p>
    {/* <ul className="cards"></ul>
    <>
      {
        produtos.map(function(produto, i){
          <>
            <li key={produto.id}> </li> 
            <img source={produto.images[i].url} alt="imagem produto"/>
            <p>{produto.title}</p>
            <p>{produto.productVariants[i].price}</p>
          </>     
        })
      }
    </>
    </ul>   */}      
  </div>
);
}
