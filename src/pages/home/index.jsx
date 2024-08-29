import Header from "../../components/header";
import Sections from "../../components/sections"
import Card from "../../components/card"
import Cubo from "../../assets/cubo.svg"

export default function Home() {
    return (
        <body>
            <Header />
            <Sections />
            <Card
                image={Cubo}

                imgAlt="Imagem de um cubo pequeno"

                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."

            />

        </body>
    )
}