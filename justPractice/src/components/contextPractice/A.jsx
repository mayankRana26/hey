import React, { createContext } from 'react'

import B from './B';

const Cont=createContext();
const A=()=> {
  const greet="Hello it is a message which I have to pass component C";
  return (
    <>
      <Cont.Provider value={greet} >
      <B/>
      
      </Cont.Provider>
    </>
  )
}

export default A;
export {Cont};
