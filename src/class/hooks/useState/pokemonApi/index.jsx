import { useEffect, useState } from "react"

export default function PokemonApi () {
    // O que esta carregando o nosso "useState vazio" é o nosso "useEffect" abaixo, com o "data.results"
    const [pokemons, setPokemons] = useState([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    
    useEffect(()=> {
        // A Fetch API fornece uma interface para buscar recursos (incluindo através da rede). É uma substituição mais poderosa e flexível para XMLHttpRequest.

        // A API Fetch usa Requestobjetos Response(e outras coisas envolvidas com solicitações de rede)
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        

        // O ".then" é uma promessa - ele me mostra se deu tudo certo. O "response" é de resposta, ele me da uma resposta. 
        // O primeiro ".then" me tras somente a resposta dos dados abstratos.
        .then((res) =>  res.json())

        // // O segundo ".then" me trás a resposta que queremos de fato.
        // Código de antes - .then((data) => console.log(data), "data")

        // Passando os resultados da lista de pokemons abaixo (dentro do return). Trazendo os resultados da procura e cancelando o "Loading"
        .then((data) => {
            setPokemons(data.results)
            // Quando os dados chegam, ele desliga o loading.
            setLoading(false)
        })

        // O ".catch" é para se der erro, ele vai avisar o usuário.
        // Código de antes - .catch((error) => console.log(error), "error")

        // Passando os resultados da lista de pokemons abaixo (dentro do return). Trazendo a mensagem de erro e cancelando o "Loading"
        .catch((error) => {
            setError(error.message)
            // Quando o erro chega, ele desliga o loading.
            setLoading(false)
        })

    }, [])


    if (loading) {
        return <p>Carregando...</p>
    }
    

    if (error) {
        return <p>Error: {error}</p>
    }


    return (
        <div>
            <h1>Lista de Pokemons</h1>
            <ul>
                {/* Aqui, preciso abrir estas chaves, isso se chama:  */}
                {
                    pokemons.map((pokemon, index) =>
                        // Código como estava:
                        // <li key={index} >{pokemon.name}</li>
                        
                        // Novo exemplo, usando o index direto no pai (div)
                        <div key={index}>
                            <li>{pokemon.name}</li>
                            <li>{pokemon.url}</li>
                        </div>
                    )
                }

            </ul>
        </div>
    )
}

// Método de array mais utilizado é o "Map" - Ele percorre cada elemento dentro do array e faz uma ação // 

// Diferença entre Map e Foreach - Map percorre o array e devolve um novo array; O Foreach sómente percorre o array