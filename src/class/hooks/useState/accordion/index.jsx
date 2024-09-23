import { useState } from "react";
import "./style.css";
import { ArrowDown, ArrowUp } from "lucide-react";

// export default function Accordion () {
//     // Passamos o useState para definir que a div "accordion-content" seja mostrada apenas quando o estado for "True"
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="accordion-container">
//             <div className="accordion-title">
//                 <p>Novidades</p>

//                 {/* Ternario dentro do botão: (Ele pergunta, "está aberto/é verdadeiro = '?' ") Se o "isOpen" estirver aberto = "True", exibe um icone de seta, se não = ":", exibe outro icone. */}
//                 {/* No botão, no evento de clicar no botão (onCLick) colocamos o setIsOpen, que mudara o estado da função (isOpen), e, declaramos que se for diferente "!" de "isOpen" ele vai abrir, ou fechar o accordion */}
//                 <button onClick={ () => setIsOpen (!isOpen) }> {isOpen ? <ArrowUp color="red" size={18}/> : <ArrowDown color="red" size={18}/>} </button>
//             </div>

//             {/* Função Ternario: Ele defini que só mostrará esta div e seu conteúdo quando o "useState" for      "True". Os dois e-comerciais - "&&" servem para definir que não a outra opção/condição além da já estabelecida (no caso, false, lá no "useState") */}
//             {isOpen && (
                // Conteúdo que será exibido quando isOpen for true
                // "&&": É o operador lógico "e". Significa que o conteúdo entre parênteses só será renderizado se isOpen for verdadeiro.

//             <div className="accordion-content">
//                 <p>Sei fazer um accordion jsx com hook</p>
//             </div>
//             )}

//         </div>
//     );
// }

export default function AccordionEx() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ width: '500px', padding: '10px' }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <p style={{ marginRight: '10px' }}><b>Noticia Nova</b></p>
                <button type="button" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <ArrowUp style={{ width: '22px', height: '18px' }} /> : <ArrowDown style={{ width: '22px', height: '18px' }} />}</button>
            </div>

            {isOpen && (
                <div>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse pariatur architecto eius nobis sequi at quidem dolorem, molestiae non, voluptas accusantium aliquid maxime, odit inventore nostrum debitis? Inventore, in?</p>
                </div>
            )}
        </div>
    );
}