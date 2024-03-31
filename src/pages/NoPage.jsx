import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Main } from "../components/Main";
import { NavLink } from "../components/NavLink";

import { Home, Package, Phone, Frown } from "lucide-react";

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
        <h2 className="not-found">
            <Frown size={64}/>
            Página não encontrada.
        </h2>
      </Main>
    </>
  );
}
