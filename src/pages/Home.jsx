import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { NavLink } from "../components/NavLink";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";
import { PageHeader } from "../components/PageHeader";
import { PageSection } from "../components/PageSection";
import { CardList } from "../components/CardList";

import { HomeIcon, Package, Phone } from "lucide-react";

import expositorImg from "../assets/exemplo.jpeg";
import balancaImg from "../assets/exemplo-2.png";
import suqueiroImg from "../assets/exemplo-3.png";
import liquidificadorImg from "../assets/exemplo-4.png";
import expositorCaroImg from "../assets/exemplo-5.png";

const cards = [
    {
      id: 1,
      name: "Expositor",
      code: "EXPO0001",
      description: "Expositor mediano, potente e de boa qualidade.",
      categoria: "Padaria",
      imgSrc: expositorImg,
      highlight: true,
    },
    {
      id: 2,
      name: "Balança",
      code: "BAL0001",
      description: "Expositor mediano, potente e de boa qualidade.",
      categoria: "Padaria",
      imgSrc: balancaImg,
      highlight: true,
    },
    {
      id: 3,
      name: "Suqueiro",
      code: "SUQ0001",
      description: "Expositor mediano, potente e de boa qualidade.",
      categoria: "Padaria",
      imgSrc: suqueiroImg,
      highlight: true,
    },
    {
      id: 4,
      name: "Liquidificador",
      code: "LIQ0001",
      description: "",
      categoria: "Padaria",
      imgSrc: liquidificadorImg,
      highlight: true,
    },
    {
      id: 5,
      name: "Expositor Caro",
      code: "EXPO0002",
      description: "Expositor mediano, potente e de boa qualidade.",
      categoria: "Padaria",
      imgSrc: expositorCaroImg,
      highlight: true,
    },
    {
      id: 6,
      name: "Balança",
      code: "BAL0002",
      description: "Expositor mediano, potente e de boa qualidade.",
      categoria: "Padaria",
      imgSrc: balancaImg,
      highlight: true,
    },
    {
      id: 7,
      name: "Suqueiro",
      code: "SUQ0002",
      description: "Expositor mediano, potente e de boa qualidade.",
      categoria: "Padaria",
      imgSrc: suqueiroImg,
      highlight: true,
    },
    {
      id: 8,
      name: "Liquidificador",
      code: "LIQ0002",
      description: "Expositor mediano, potente e de boa qualidade.",
      categoria: "Padaria",
      imgSrc: liquidificadorImg,
      highlight: true,
    },
]

export default function Home({ count, handleAddCount }) {
    return (
        <>
            {/* <Button onClick={()=> localStorage.clear()}>Limpar Dados</Button> */}
            <Header count={count} />

            <Menu>
                <NavLink active icon={<HomeIcon size={16}/>} label="home"/>
                <NavLink icon={<Package size={16}/>} label="equipamentos" />
                <NavLink icon={<Phone size={16}/>} label="contato" />
            </Menu>

            <Banner />
            <Main>
                <PageHeader label="Em destaque" of="home" />
                <PageSection>
                    <CardList handleAddCount={handleAddCount} list={cards} swiperOn highlight />
                </PageSection>
            </Main>
        </>
    )
}