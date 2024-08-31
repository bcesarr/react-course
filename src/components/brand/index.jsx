import './style.css'
import Alelo from '../../assets/cards_flags/icon-alelo.svg'
import American from '../../assets/cards_flags/icon-america-express.svg'
import Master from '../../assets/cards_flags/icon-mastercard.svg'
import Visa from '../../assets/cards_flags/icon-visa.svg'

// Primeiro modelo, e errado, de código sujo, de se fazer o Switch com imagens

// export default function Brand ({brand}) {
//     switch (brand) {

//         case "Alelo": return <img src={Alelo} alt="Imagem de bandeira do cartão de crédito da American Express" />

//         case "American": return <img src={American} alt="Imagem de bandeira do cartão de crédito da American Express" />

//         case "Master": return <img src={Master} alt="Imagem de bandeira do cartão de crédito da MasterCard" />

//         case "Visa": return <img src={Visa} alt="Imagem de bandeira do cartão de crédito da Visa" />

//         default: return <h2>Selecione uma Brand disponível</h2>
//     }
// }


// ---------------------------------------------------------------- \\


// Segundo modelo, o jeito certo, de código limpo

// Criando aqui um dicionairo com as propriedades no mesmo nome das variaveis das imagens e chamando as imagens aqui.
const brandImages = {
    alelo: Alelo,
    american: American,
    master: Master,
    visa: Visa
}

export default function Brand({ brand }) {   // Chamando brand como prop/paramentro
    const ImageSrc = brandImages[brand]   // Criando uma variavel dentro da function e chamando o dicionario "brandImages e chamando uma lista / array com a prop brand para percorrer a brand e trazer o que eu chamar la no "App.jsx"

    // Utilizando um ternario - Se a imagem chamada for imagem mesmo, mostrará a imagem, SE NÃO, mostrará o h2, caso o valor setado seja outro além dos nomes dos das imagens.

    // Utilizando a crase, podemos utilzar string junto com variaveis
    return ImageSrc ? <img src={ImageSrc} alt={`Imagem da bandeira ${brand}`} /> : <h2>Selecione uma prop de bandeira disponivel</h2>
}