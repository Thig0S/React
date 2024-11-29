import React , { useState } from "react"

const Contador = () => {

    const [num, setnum] = useState(0);

    const Acrescentar = () => {
      setnum (num+1);
    }
    const Resetar = () => {
      setnum (0);
    }
    const Diminuir = () => {
      setnum (num-1);
    }

  return (
    <>
      <div className="main">
        <h2>{num}</h2>
        <div className="buttons">
          <button onClick={Acrescentar}>Aumentar</button>
          <button onClick={Resetar}>Resetar</button>
          <button onClick={Diminuir}>Diminuir</button>
        </div>
      </div>
    </>
  )
}

export default Contador
