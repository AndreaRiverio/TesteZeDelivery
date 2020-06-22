// import axios from 'axios';

// export const listProdutos = (pocId) => axios
// .get({ url: 'https://api.code-challenge.ze.delivery/public/graphql',
//   data: {
//     query: `
//     query poc($id: ID!, $categoryId: Int, $search: String){
//       poc(id: $id) {
//         id
//         products(categoryId: $categoryId, search: $search) {
//           id
//           title
//           rgb
//           images {
//             url
//           }
//           productVariants {
//             availableDate
//             productVariantId
//             price
//             inventoryItemId
//             shortDescription
//             title
//             published
//             volume
//             volumeUnit
//             description
//             subtitle
//             components {
//               id
//               productVariantId
//               productVariant {
//                 id
//                 title
//                 description
//                 shortDescription
//               }
//             }
//           }
//         }
//       }
//     }`,
//     variables: { id: pocId, search: "",categoryId: null},
//     }
//   })
//   .then(({res}) => res);
