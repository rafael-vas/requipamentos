import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { NavLink } from "../../components/NavLink";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";

import { Home, Package, Phone } from "lucide-react";

import { Dialog, Button, Flex } from "@radix-ui/themes";
import { PageSection } from "../../components/PageSection";

export default function Contato({ count }) {
  return (
    <>
      {/* <Button onClick={()=> localStorage.clear()}>Limpar Dados</Button> */}
      <Header count={count}/>
      <Menu>
        <NavLink icon={<Home size={16} />} label="home" />
        <NavLink icon={<Package size={16} />} label="equipamentos" />
        <NavLink active icon={<Phone size={16} />} label="contato" />
      </Menu>

      <Main>
        <PageHeader title="Contato" text={"Possui alguma dúvida? não hesite em entrar em contato conosco!"} />
        <PageSection>
          <Dialog.Root>
            <Dialog.Trigger>
                <Button variant="surface" color="blue">Contate-nos</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Siga nossas redes!</Dialog.Title>

                <Dialog.Description size="2" mb="4">
                  Facebook, Instagram, Whatsapp
                </Dialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                    Fechar
                    </Button>
                  </Dialog.Close>
                </Flex>

            </Dialog.Content>

          </Dialog.Root>
        </PageSection>
      </Main>
    </>
  );
}
