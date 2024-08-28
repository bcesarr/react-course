import './style.css'

export default function Card({title, type, typeTwo, Weaknesses, description, image, imgAlt}){
    return (
      <div className='card'>
        <img src={image} alt={imgAlt}/>
        <div className='text-wrapper'>
          <h2>{title}</h2>
          <div className='type'>
            <h3>Tipo:</h3>
            <p>{type}</p>
            <p><span>{typeTwo}</span></p>
          </div>
          <div className='Weaknesses'>
            <h3>Fraquezas:</h3>
            <p>{Weaknesses}</p>
          </div>
          <p><b>Descrição: </b>{description}</p>
        </div>
      </div>
    )
  }