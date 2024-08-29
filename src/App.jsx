// Inicio do Programa
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// ----------------------------------------------------------------------- \\

// (AULA DE PROPS - Ínicio)

// (Primeira Parte)

/* 
// Exportando a Home - arquivo index da pasta page (dentro dele, ele exporta o Header (arquivo index da pasta header))

import Home from "./pages/home/index.jsx"

export default function App(){    // O "default" só pode ser usado uma vez
  return(
    <Home />
  )
}
*/



// (Segunda Parte)
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



// (Terceira Parte)
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



// (Quarta Parte)
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



// (Quinta Parte)
// Utilizando tipo númerico

// function Filho ({idade}){
//   return(
//     <p>{idade}</p>
//   )
// }

// export default function App(){
//   return <Filho idade={25} />
  
// }



// (Sexta Parte)
// Utilizando o tipo Boolean

// function Filho ({approved}){
//   return( <>
//       {/* {approved ? <p>Aprovado!</p> : <p>Reprovado</p> }*/} {/* Isto é verdadeiro ? Retorno :(se não) retorno */}
//       {approved ? <img src="https://pa1.aminoapps.com/6502/0683711d56279455df90340a7192f9c620ea0553_hq.gif" alt="Bob Esponja fazendo joia" /> : <img src ="https://64.media.tumblr.com/2ddc057ed19e3f8f33efdcd029eff929/7d8c724997a7417c-ba/s540x810/cfad0f3422858b0135351069801e26a131782250.gifv" alt="Bob Esponja chorando" /> } 
//     </> // O nome desta tag é fragmento
//   )
// }

// export default function App(){
//     // return <Filho approved />   // O "true" é o valor padrão, então não precisa colocar ele
//    return <Filho approved={false} />   // O "true" é o valor padrão
  
// }



// (Sétima Parte)
// Uso de props com evento onClick

// function Filho({onAlert}){
//   return <button onClick={onAlert}>Receba seu alert</button>
// }

// export default function App(){
//   const handleAlert = () => alert("Funcionou")
//   return <Filho onAlert={handleAlert} />

//   // return <Filho onAlert={() => alert("Funcionou")} /> // Não é uma boa prática jogar o arrow function direto
// }

/* 
export default function App(){
  // return <button onClick={() => console.log("Função Funcionando")}>Click Aqui</button>
  return <button onClick={() => alert("Função Funcionando")}>Click Aqui</button>
}
*/


// (Oitava Parte)

// function Filho({nome = "Mundo"}){
//   return <p>Olá, {nome}</p>
// }
// export default function App(){
//   return <Filho nome="Bruno" />   // As vezes passamos aqui no chamado da function (no caso, Filho) uma variavel que queremos como segurança, para caso o site quebre não deixe de exibir o que é preciso.
// }


// ----------------------------------------------------------------------- \\


// Exportando a section da Landinpag - arquivo index da pasta sections

// import Sections from './components/sections'

// export default function App() {
//   return <Sections />
// }


// ----------------------------------------------------------------------- \\


// Exportando os cards abaixo do hero da página - arquivo index da pasta card

import Card from './components/card'
import Cubo from './assets/cubo.svg'

export default function App() {
  return <Card
    image={Cubo}

    imgAlt="Imagem de um cubo pequeno"

    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
    
  />
}














