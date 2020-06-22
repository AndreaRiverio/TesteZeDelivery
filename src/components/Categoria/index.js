import React, { useEffect } from 'react';

import axios from 'axios';

export default function Categoria(){
 const [allCategoria, setAllCategoria] = React.useState([]);

    useEffect(() => {
       // let categoriaId = [];
      axios({ 
        url: 'https://api.code-challenge.ze.delivery/public/graphql',
        method: 'post',
        data: {
        query: `
        query allCategoriesSearch {
            allCategory{
              title
              id
            }
          }`,
      }
    })
    .then(res => {
      const allCategoria = res.data.data.allCategory;
      setAllCategoria(allCategoria);
      //console.log(res.data.data.allCategory);
      localStorage.setItem('allCategoria', JSON.stringify(allCategoria));
    })
}, []);
     
  return( 
    <div className='categoria'>
        {allCategoria.map( categoria => (
            <>
            <li key={categoria.id}></li>
            {console.log(categoria.id)}
            <p>{categoria.title}</p>
            </>
        ))}
    </div>

  
);

}