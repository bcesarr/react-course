import './style.css'

export default function Square({ color }) {
    // Colocando duas classes dentro do className e na segunda passando os pareametros da desustruturização
    
    // Quando o usuario passar o o nome da cor (vermelho ou verde) ela vai mudar sozinho

    // Isso é estilização dinamica utilizando Javascript

    return <div className={`square square-${ color }`}></div>
}