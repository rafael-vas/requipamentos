import "./style.css";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { NavLink } from "../../components/NavLink";

import { Home, Package, Phone, Frown } from "lucide-react";
import { Button } from "@radix-ui/themes"

export default function NoPage() {
  return (
    <>
      <Header />
      <Menu>
        <NavLink icon={<Home size={16} />} label="home" />
        <NavLink active icon={<Package size={16} />} label="equipamentos" />
        <NavLink icon={<Phone size={16} />} label="contato" />
      </Menu>
      <Main>
        <div className="not-found-container">
            <Frown className="not-found-icon" size={64}/>
            <h2 className="not-found-title">Página não encontrada.</h2>
            <a href="/home">
              <Button className="not-found-btn" variant="soft" color="blue">
                Voltar para a Home
              </Button>
            </a>
        </div>
      </Main>
    </>
  );
}
