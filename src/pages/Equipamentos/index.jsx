import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { NavLink } from "../../components/NavLink";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import { PageSection } from "../../components/PageSection";
import { CardList } from "../../components/CardList";

import { Home, Package, Phone } from "lucide-react";
// import { Button } from "@radix-ui/themes";

import expositorImg from "../../assets/exemplo.jpeg";
import balancaImg from "../../assets/exemplo-2.png";
import suqueiroImg from "../../assets/exemplo-3.png";
import liquidificadorImg from "../../assets/exemplo-4.png";
import expositorCaroImg from "../../assets/exemplo-5.png";

const cards = [
  {
    id: 1,
    name: "Expositor",
    code: "EXPO0001",
    description: "Expositor mediano, potente e de boa qualidade.",
    category: "Padaria",
    imgSrc: expositorImg,
    maker: "Teste"
  },
  {
    id: 2,
    name: "Balança",
    code: "BAL0001",
    description: "Expositor mediano, potente e de boa qualidade.",
    category: "Padaria",
    imgSrc: balancaImg,
    maker: "Teste"
  },
  {
    id: 3,
    name: "Suqueiro",
    code: "SUQ0001",
    description: "Expositor mediano, potente e de boa qualidade.",
    category: "Padaria",
    imgSrc: suqueiroImg,
    maker: "Teste"
  },
  {
    id: 4,
    name: "Liquidificador",
    code: "LIQ0001",
    description: "",
    category: "Padaria",
    imgSrc: liquidificadorImg,
    maker: "Teste"
  },
  {
    id: 5,
    name: "Expositor Caro",
    code: "EXPO0002",
    description: "Expositor mediano, potente e de boa qualidade.",
    category: "Padaria",
    imgSrc: expositorCaroImg,
    maker: "Teste"
  },
  {
    id: 6,
    name: "Balança",
    code: "BAL0002",
    description: "Expositor mediano, potente e de boa qualidade.",
    category: "Padaria",
    imgSrc: balancaImg,
    maker: "Teste"
  },
  {
    id: 7,
    name: "Suqueiro",
    code: "SUQ0002",
    description: "Expositor mediano, potente e de boa qualidade.",
    category: "Padaria",
    imgSrc: suqueiroImg,
    maker: "Teste"
  },
  {
    id: 8,
    name: "Liquidificador",
    code: "LIQ0002",
    description: "Expositor mediano, potente e de boa qualidade.",
    category: "Padaria",
    imgSrc: liquidificadorImg,
    maker: "Teste"
  },
]

export default function Equipamentos({ count, handleAddCount }) {
  return (
    <>
      {/* <Button onClick={()=> localStorage.clear()}>Limpar Dados</Button> */}
      <Header count={count} />
      <Menu>
          <NavLink icon={<Home size={16} />} label="home" />
          <NavLink active icon={<Package size={16} />} label="equipamentos" />
          <NavLink icon={<Phone size={16} />} label="contato" />
      </Menu>

      <Main>
          <PageHeader title="Equipamentos" text={"Aqui você encontra os melhores equipamentos para o seu estabelecimento!"} />
          <PageSection>
              <CardList handleAddCount={handleAddCount} list={cards} />
          </PageSection>
      </Main>
    </>
  );
}
