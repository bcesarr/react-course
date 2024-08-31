import './style.css'
import Image from '../../assets/placeholder-Image.svg'

export default function Hero({ aligment }) {
    return (
        <div className={`hero-container hero-${aligment}`}>
            <img src={Image} alt="Imagem de local de imagem vazio para se colocar imagem" />

            <div className="hero-text">
                <h6>Feature three</h6>

                <h2>Describe benefit of feature three</h2>

                <p>Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.</p>

                <button>Learn more</button>

            </div>

        </div>
    )
}