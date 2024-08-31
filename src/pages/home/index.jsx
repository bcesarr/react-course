import Header from "../../components/header";
import Sections from "../../components/sections"
import Card from "../../components/card"
import Cubo from "../../assets/cubo.svg"

export default function Home() {
    return (
        <div className="app-container">
            <Header />
            <Sections />
            
            <div className="card-container">

            <Card
                image={Cubo}

                imgAlt="Imagem de um cubo pequeno"

                title="Highlight benefit one"

                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."

            />

            <Card
                image={Cubo}

                imgAlt="Imagem de um cubo pequeno"

                title="Highlight benefit two"

                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."

            />

            <Card
                image={Cubo}

                imgAlt="Imagem de um cubo pequeno"

                title="Highlight benefit three"

                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."

            />

            </div>
            
        </div>
    )
}