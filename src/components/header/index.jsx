import './styles.css'
import Logo from "../../assets/company_logo.svg"  // Importamos o logo chamando de "Logo" e buscamos o caminho da pasta assim.
import icone_seta_para_baixo from "../../assets/icons/icone_seta_para_baixo.svg"

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logomarca da empresa" />

            <nav>
                <a href="#">Link One</a>
                <a href="#">Link Two</a>
                <a href="#">Link Three</a>
                <a href="#">
                    Link Four <img src={icone_seta_para_baixo} alt="seta para baixo" />
                </a>
            </nav>

            <button type='button'>Try it for free</button>
        </header>

                

    )
}