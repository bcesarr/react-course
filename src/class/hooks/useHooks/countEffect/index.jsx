// Utilizando o useEffect e o useState

import { useEffect, useState } from "react"

export default function CountEffect() {
    
    // O "count" recebe o valor inicial; a função do "setCount" é mudar o estado inicial do "count".
    // Nosso contador começa em "0", por isso, colocamos 0 no paramentro do "useState" 
    const [count, setCount] = useState(0)

    // tradicional function
    // function handleCount() {
    //     setCount(count + 1)
    // }

    // Como funciona: Ele recebe uma função como primeiro argumento e um array de dependências como segundo argumento. A função será executada após cada renderização, e o array de dependências determina quando essa função deve ser executada novamente.
    useEffect ( () => {
        console.log("useEffect ativado pela dependência count")
    }, [count])
    
    return (
        <div>
            <p>Você clicou {count} vezes</p>

            {/* Para contar quantas vezes o botão foi clicado, podemos fazer esta função: */}
            <button onClick={ ()=> setCount (count + 1)}>Click Aqui</button>

            {/* Ou podemos utilizar a função / método tradicional: */}
            {/* <button onClick={handleCount}>Click Aqui</button> */}
        </div>
    );
}