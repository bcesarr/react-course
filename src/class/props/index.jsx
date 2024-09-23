// (AULA DE PROPS - Ínicio)


// ----------------- (Primeira Parte) ----------------- \\

// Exportando a Home - arquivo index da pasta page (dentro dele, ele exporta o Header (arquivo index da pasta header))

// import Home from "./pages/home/index.jsx"

// export default function App(){    // O "default" só pode ser usado uma vez
//   return(
//     <Home />
//   )
// }
// */


// ----------------- || ----------------- || ----------------- \\

// ----------------- (Segunda Parte) ----------------- \\


// Estudo das Props

// function Filho(props){    // Props = É um parâmetro e também um objeto
//   // return <p>Olá, Mundo!</p>

//   console.log(props)
//   return <p>{props.title}</p>
// }

// export default function App(){
//   return(
//     <Filho title="Enviando uma mensagem" />
//   )
// }


// ----------------- || ----------------- || ----------------- \\

// ----------------- (Terceira Parte) ----------------- \\


// Exportando o Card - arquivo index da pasta card

// import Card from "./components/card"

// export default function App(){
//   return <Card
//     title="Gengar"
//     type="Ghost"
//     typeTwo="Poison"
//     Weaknesses="Terra - Psíquico - Fantasma - Escuro"
//     description="Para roubar a vida de seu alvo, ele se esconde na sombra da presa e espera silenciosamente por uma oportunidade."
//     image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png"
//     imgAlt="Imagem do pokemon Gengar"
//     />
// }


// ----------------- || ----------------- || ----------------- \\

// ----------------- (Quarta Parte) ----------------- \\


// Uso da prop Children (vem de criança/filho)

// function Filho ({children}){
//   return(
//     <div className="filho">
//       {children}
//     </div>
//   )
// }

// export default function App(){
//   return <Filho>
//             {/* <p>Sou uma tag "p" passando por filho</p>  */}
//             <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/149.png" alt="Imagem do Pokemon Dragonite" />
//           </Filho>;
// }


// ----------------- || ----------------- || ----------------- \\

// ----------------- (Quinta Parte) ----------------- \\


// Utilizando tipo númerico

// function Filho ({idade}){
//   return(
//     <p>{idade}</p>
//   )
// }

// export default function App(){
//   return <Filho idade={25} />
  
// }


// ----------------- || ----------------- || ----------------- \\

// ----------------- (Sexta Parte) ----------------- \\


// Utilizando o tipo Boolean

// function Filho ({approved}){
//   return(
//        <>

// // Explicação da função ternario - isso é verdadeiro ? retorno : (se não) retorno

//       {/* {approved ? <p>Aprovado!</p> : <p>Reprovado</p> }*/} {/* Isto é verdadeiro ? Retorno :(se não) retorno */}

          // {approved ? <img src="https://media.tenor.com/GNBVFfe7qzAAAAAM/arrogant-gumball-watterson.gif" alt="Gumball de terno se achando" /> : <img src="https://media.tenor.com/ctxzq2YvLXgAAAAM/gumball-darwin.gif" alt="Gumball e Darwin Triste" />}

//        </> // O nome desta tag é fragmento
//   )
// }

// export default function App(){
//     // return <Filho approved />   // O "true" é o valor padrão, então não precisa colocar ele
//    return <Filho approved={false} />   // O "true" é o valor padrão
  
// }


// ----------------- || ----------------- || ----------------- \\

// ----------------- (Sétima Parte) ----------------- \\


// Uso de props com evento onClick

// Uso da Prop com evento onClick
// Podemos fazer assim:
// export default function App () {

//     Outro exemplo:
//     return <button onClick={() => console.log("Função Funcionando")}>Click Aqui</button>

//     Ultimo jeito feito:
//     return <button onClick={() => alert ("Função funcionando")}
//     >Click Aqui</button>
// }


// Segundo parte fazemos assim:
// function Filho ({ onAlert }) {
//     return <button onClick={onAlert}>Receba seu alert</button>
// }

// export default function App () {
//     const handleAlert = () => alert("Receba seu doce")
//     return <Filho onAlert={handleAlert} />

//     Outro jeito de fazer:
//     return <Filho onAlert={() => alert("Funcionou")} /> // Não é uma boa prática jogar o arrow function direto, deste jeito

// }


// ----------------- || ----------------- || ----------------- \\

// ----------------- (Oitava Parte) ----------------- \\


// function Filho({nome = "Mundo"}){
//   return <p>Olá, {nome}</p>
// }
// export default function App(){
//   return <Filho nome="Bruno" />   // As vezes passamos aqui no chamado da function (no caso, Filho) uma variavel que queremos como segurança, para caso o site quebre não deixe de exibir o que é preciso.
// }