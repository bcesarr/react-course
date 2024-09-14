import { useState } from "react"
import "./style.css"
import { ArrowDown, ArrowUp } from "lucide-react"

export default function Accordion () {
    // Passamos o useState para definir que a div "accordion-content" seja mostrada apenas quando o estado for "True"
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-container">
            <div className="accordion-title">
                <p>Novidades</p>

                {/* Ternario dentro do botão: (Ele pergunta, "está aberto/é verdadeiro = '?' ") Se o "isOpen" estirver aberto = "True", exibe um icone de seta, se não = ":", exibe outro icone. */}
                {/* No botão, no evento de clicar no botão (onCLick) colocamos o setIsOpen, que mudara o estado da função (isOpen), e, declaramos que se for diferente "!" de "isOpen" ele vai abrir, ou fechar o accordion */}
                <button onClick={ () => setIsOpen (!isOpen) }> {isOpen ? <ArrowUp color="red" size={18}/> : <ArrowDown color="red" size={18}/>} </button>
            </div>
            
            {/* Função Ternario: Ele defini que só mostrará esta div e seu conteúdo quando o "useState" for "True". Os dois e-comerciais - "&&" serve para definir que não a outra opção além da já estabelecida (no caso, false, lá no "useState") */}
            {isOpen && (
            <div className="accordion-content">
                <p>Sei fazer um accordion jsx com hook</p>
            </div>
            )}

        </div>
    );
}