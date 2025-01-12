// import React,{useContext} from 'react'
// import { Cont } from './A';
// // import { B } from './B';
//  const C=()=> {
//   return (
//     <>
//       <Cont.Consumer>
//         {
//           (value)=> {
//             return <h1>{value}</h1>
//           }
//         }
//       </Cont.Consumer>
//     </>
//   )
// }
// export default C;
import React, { useContext } from 'react';
import { Cont } from './A';

const C = () => {
  const value = useContext(Cont);
  return <><h1>{value}</h1>;</>
};

export default C;
