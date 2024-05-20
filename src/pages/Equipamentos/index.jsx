import "./style.css"

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { NavLink } from "../../components/NavLink";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import { PageSection } from "../../components/PageSection";
import { CardList } from "../../components/CardList";
import { Filter } from "../../components/Filter";

import { Home, Package, Phone } from "lucide-react";
import { Button } from "@radix-ui/themes";

import cards from './products.json';

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
          <PageSection name="product">
              <Filter />
              <CardList handleAddCount={handleAddCount} list={cards} />
          </PageSection>
      </Main>
    </>
  );
}
