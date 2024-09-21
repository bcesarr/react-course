import { useEffect } from "react"

export default function Example () {
    
    useEffect( () => {
        console.log("useEffect rodando")
    }, [])

    return (
        <h1>Sou um example de useEffect</h1>
    );
}