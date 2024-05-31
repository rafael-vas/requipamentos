import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { NavLink } from "../../components/NavLink";
import { Banner } from "../../components/Banner";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import { PageSection } from "../../components/PageSection";
import { CardList } from "../../components/CardList";

import { HomeIcon, Package, Phone } from "lucide-react";

import cards from "../Equipamentos/products.json";

const highlightCards = cards.filter(card => card.highlight)

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
                <PageHeader title="Em destaque" of="home" />
                <PageSection>
                    <CardList
                        handleAddCount={handleAddCount}
                        list={highlightCards}
                        swiperOn
                        highlight
                    />
                </PageSection>
            </Main>
        </>
    )
}