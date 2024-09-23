import { useEffect } from "react"

export default function Example () {
    
    // Como funciona: Ele recebe uma função como primeiro argumento e um array de dependências como segundo argumento. A função será executada após cada renderização, e o array de dependências determina quando essa função deve ser executada novamente.
    useEffect( () => {
        console.log("useEffect rodando")
    }, [])  // - "[]" - Onde vai a função de dependência

    return (
        <h1>Sou um example de useEffect</h1>
    );
}