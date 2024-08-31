// Está importação da imagem abaixo é para o modelo do módo tradicional
// import cubo from '../../assets/cubo.svg'

// ----------  Card do Pokemon  ----------\\
// export default function Card({title, type, typeTwo, Weaknesses, description, image, imgAlt}){
//     return (
//       <div className='card'>
//         <img src={image} alt={imgAlt}/>
//         <div className='text-wrapper'>
//           <h2>{title}</h2>
//           <div className='type'>
//             <h3>Tipo:</h3>
//             <p>{type}</p>
//             <p><span>{typeTwo}</span></p>
//           </div>
//           <div className='Weaknesses'>
//             <h3>Fraquezas:</h3>
//             <p>{Weaknesses}</p>
//           </div>
//           <p><b>Descrição: </b>{description}</p>
//         </div>
//       </div>
//     )
//   }



// ----------  Forma de fazer os cards, do jeito mais tradicional  ---------- \\

// export default function Card() {
//   return (
//     <section className='section-cards'>

//         <div className='div-cards-global'>

//           <div className='card-infos'>
//             <img src={cubo} alt="Imagem de um cubo" />

//             <h3>Highlight benefit one</h3>

//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Suspendisse varius enim in eros elementum tristique.<br />Duis cursus, mi quis viverra ornare, eros dolor interdum<br />nulla.</p>

//           </div>

//           <div className='card-infos'>
//             <img src={cubo} alt="Imagem de um cubo" />

//             <h3>Highlight benefit two</h3>

//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Suspendisse varius enim in eros elementum tristique.<br />Duis cursus, mi quis viverra ornare, eros dolor interdum<br />nulla.</p>

//           </div>

//           <div className='card-infos'>
//             <img src={cubo} alt="Imagem de um cubo" />

//             <h3>Highlight benefit three</h3>

//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Suspendisse varius enim in eros elementum tristique.<br />Duis cursus, mi quis viverra ornare, eros dolor interdum<br />nulla.</p>

//           </div>
//         </div>

//     </section>
//   )
// }


// ----------------------------------------------------------------------- \\


// Forma de fazer utilizando as Props

// Se tivermos estes 3 cards dentor do card, este componente seria um "Benefit"

// export default function Card({paragraph, image, imgAlt}) {
//   return (
//     <section className='section-cards'>

//       <div className='div-cards-global'>

//         <div className='card-infos'>
//           <img src={image} alt={imgAlt}/>

//           <h3>Highlight benefit one</h3>

//           <p>{paragraph}</p>

//         </div>
        
//         <div className='card-infos'>
//           <img src={image} alt={imgAlt}/>

//           <h3>Highlight benefit two</h3>

//           <p>{paragraph}</p>

//         </div>
        
//         <div className='card-infos'>
//           <img src={image} alt={imgAlt}/>

//           <h3>Highlight benefit three</h3>

//           <p>{paragraph}</p>

//         </div>

//       </div>

//     </section>
//   )
// }

//  ---------- Card Dinamico ----------  \
import './style.css'

export default function Card ({image, imgAlt, title, paragraph}) {
  return (
        <div className='card'>
            <img src={image} alt={imgAlt}/>

            <h3>{title}</h3>

            <p>{paragraph}</p>
        </div>

    )
}