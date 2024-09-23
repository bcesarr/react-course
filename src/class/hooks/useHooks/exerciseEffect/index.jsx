import { useState, useEffect } from 'react';

// ----- UTILIZANDO ASYNC E AWAIT E TRY, CATCH, FINALLY, SEM UTILIZAR O .THEN E .CATHCH ----- \\

// export default function ExerciseEffect() {
//     const [posts, setPosts] = useState([])
//     const [carregando, setCarregando] = useState(true)

//     useEffect(() => {
//         // Função para buscar dados da API
//         // "Async" - Declaração: Colocada antes de uma função, indica que a função retornará uma Promise.
//         // Execução: Ao chamar uma função assíncrona, ela não bloqueia a execução do código. Em vez disso, retorna imediatamente uma Promise.
//         //Simplificação: Torna o código mais legível, evitando a necessidade de encadear múltiplos .then() e .catch().
//         // Declara a função (buscarPosts) como assíncrona, indicando que ela retornará uma Promise.
//         const buscarPosts = async () => {
//             // Utiliza try...catch...finally para tratar possíveis erros e garantir que o estado de carregamento seja atualizado.
//             try {

//                 // "Await" - Uso: Só pode ser usado dentro de uma função assíncrona.
//                 // Pausa: Pausa a execução da função até que a Promise retornada por uma expressão assíncrona seja resolvida.
//                 // Retorno: Retorna o valor resolvido da Promise.
//                 // A execução da função pausa até que a requisição fetch seja concluída, e então armazena a resposta na variável resposta.
//                 const resposta = await fetch('https://jsonplaceholder.typicode.com/posts')

//                 // Pausa novamente até que a resposta seja convertida para JSON e armazena os dados na variável dados.
                   // Podemos ver a resposta no inspencionar no navegador, indo até a aba network -> response.
//                 const dados = await resposta.json()

//                 // Atualiza o estado "posts" com os dados obtidos.
//                 setPosts(dados)

//                 // "catch" para pegar algum possivel erro e mostrar uma mensagem no console mostrando o erro.
//             } catch (erro) {
//                 console.error('Erro ao buscar posts: ', erro);

//             } finally {
//                 setCarregando(false)

//             }
//         }

//         // A função buscarUsuarios é chamada imediatamente após a definição, iniciando a busca pelos dados.
//         buscarPosts()
//     }, []) // Array de dependências vazio

//     // Verifica se os dados ainda estão sendo carregados. Se sim, exibe uma mensagem de carregamento.
//     // "Se/if" "carregando" for "true"...
//     if (carregando) {
//         return <p>Carregando Posts...</p>
//     }

//     // Se os dados já foram carregados, renderiza a lista de posts.
//     return (
//         <div>
//             <h1>Lista de Posts</h1>

//             <ul>
//                 {/* "map": Percorre o array de posts e cria um elemento <li> para cada post, exibindo o id e post. */}
//                 {
//                     posts.map((post, index) => (
//                         // Uma lista não ordenada para exibir os posts.
//                         <li key={index}>
//                             {post.id} - {post.title}
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     );
// }

export default function ExerciseEffect() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Carregando o loading até que a requisição e busca na API seja concluida, depois transformada em json e colocada no "posts"
        setLoading(true)
        // Fazendo a requisição na API e buscando os dados
        fetch('https://jsonplaceholder.typicode.com/posts')


            // Pegando os dados da resposta/promisse - promessa recebidos e transformando em json
            // Podemos ver a resposta no inspencionar no navegador, indo até a aba network -> response.
            .then((res) => res.json())

            // Pegando os dados recebidos da requisição da API com o fetch e transformados em json e colocando no "setPosts" para alimentar a array vazia - '[]'
            .then((data) => {
                setPosts(data)
                // Finalizando o loading
                setLoading(false)
            })

            // O loading continua e, se houver algum erro o "catch vai pegar e exibir uma mensagem e depois finalizar o loading
            .catch((error) => {
                setError(error.message)
                // Finalizando o loading
                setLoading(false)
            })

    }, [])

    if (loading) {
        return <p>Carregando...</p>
    }

    // Para mostrar ao usuario que houve um erro
    if (error) {
        return <p>Erro na busca pelos posts na API: {error}</p>
    }

    // Retornando então a lista após renderizar e executar tudo
    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {
                    // "map" - é para percorrer toda a array dos posts que foi preenchida com o fetch e then e, cria uma li para cada um.
                    posts.map((post, index) => (
                        <li key={index}>
                            id: {post.id} - 
                            titulo: {post.title}
                        </li>
                    ))
                }
            </ul>
        </div>

    );
}
