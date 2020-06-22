import React, { useEffect } from 'react';
import axios from 'axios';
import ReactImageFallback from 'react-image-fallback';


export default function Vinhos(){
  const [produtos, setProdutos] = React.useState([]);
  
    useEffect(() => {

      let pocId = localStorage.getItem('pocId');

      let allCategoria = localStorage.getItem('allCategoria');
      allCategoria= JSON.parse(allCategoria);
      let vinhosID = parseInt(allCategoria[2].id);
     
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
        variables: { id: pocId, search: !"", categoryId:vinhosID }
      }
    })
    .then(res => {
     const produtos= res.data.data.poc.products;
     setProdutos(produtos);
     //console.log(produtos);
      
   
     });
    }, []);

return( 
  <div className='containerProduto'>
    <p>Vinhos</p>
    {/* <ul className="cards"></ul>
    <>
      {
        produtos.map(function(produto, i){
          <>
            <li key={produto.id}> </li> 
            <img src={produto.images[i].url} alt="imagem produto"/>
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