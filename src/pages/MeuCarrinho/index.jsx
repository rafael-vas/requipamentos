import "./style.css";

import { useEffect } from "react";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { NavLink } from "../../components/NavLink";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import { PageSection } from "../../components/PageSection";
import { SelectField } from "../../components/SelectField";
import { TableRowHeader } from "../../components/TableRowHeader";
import { TableContainer } from "../../components/TableContainer";

import {
  Home,
  Package,
  Phone,
  ArrowBigRightDash,
  ArrowBigLeftDash,
  Trash2Icon,
} from "lucide-react";

import { Dialog, Flex, Button, Table } from "@radix-ui/themes";

export default function MeuCarrinho({ count, setCount, info, setInfo }) {
  function handleChangeQty(
    id,
    i,
    name,
    description,
    code,
    maker,
    imgSrc,
    value
  ) {
    setInfo(() => info.filter((item, itemIndex) => itemIndex !== i));

    const newInfo = {
      id: id,
      name: name,
      description: description,
      code: code,
      maker: maker,
      imgSrc: imgSrc,
      quantity: parseInt(value),
    };

    setInfo((info) => [...info, newInfo]);
  }

  function getUpdatedQuantities(infoList) {
    return infoList.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  }

  function deleteItem(id, i) {
    const newInfo = info.filter((item, itemIndex) => itemIndex !== i);
    setInfo(() => [...newInfo]);
    // console.log(newInfo)
  }

  useEffect(() => {
    setCount(() => {
      return getUpdatedQuantities(info);
    });
  }, [info, setCount]);

  return (
    <>
      {/* <Button onClick={() => localStorage.clear()}>Limpar Dados</Button> */}
      <Header count={count} />
      <Menu>
        <NavLink icon={<Home size={16} />} label="home" />
        <NavLink icon={<Package size={16} />} label="equipamentos" />
        <NavLink icon={<Phone size={16} />} label="contato" />
      </Menu>

      <Main>
        <PageHeader
          title="Meu Carrinho"
          text={
            "Veja os itens selecionados no seu carrinho e solicite um orçamento!"
          }
        />
        <PageSection>
          {/* <h3 className="subtitle">
            Total de itens no carrinho: {count}
          </h3> */}
          {count > 0 && (
            <Flex className="btns">
              <a href="/home">
                <Button className="back-btn" variant="soft" color="gray">
                  <ArrowBigLeftDash size={"1.1rem"} />
                  <span>Voltar</span>
                </Button>
              </a>
              <a href="/orcamento">
                <Button className="next-btn" color="green">
                  <span>Avançar Orçamento</span>
                  <ArrowBigRightDash size={"1.1rem"} />
                </Button>
              </a>
            </Flex>
          )}
          <TableContainer>
            {info
              .sort((a, b) => a.id - b.id)
              .map(
                (
                  {
                    id,
                    name,
                    description,
                    code,
                    maker = "Não informado",
                    imgSrc,
                    quantity = 1,
                  },
                  i
                ) => {
                  return (
                    id && (
                      <Table.Row key={i + id + code}>
                        <TableRowHeader
                          name={name}
                          description={description}
                          code={code}
                          imgSrc={imgSrc}
                        />
                        <Table.Cell className="flex">
                          <SelectField
                            label={"Número"}
                            onValueChange={(value) => {
                              handleChangeQty(
                                id,
                                i,
                                name,
                                description,
                                code,
                                maker,
                                imgSrc,
                                value
                              );
                            }}
                            quantity={quantity}
                          />
                        </Table.Cell>
                        <Table.Cell>
                          <Flex
                            height={"100%"}
                            justify={"between"}
                            align={"center"}
                          >
                            <span className="maker">{maker}</span>

                            <Dialog.Root className="dialog">
                              <Dialog.Trigger>
                                <Button
                                  // onClick={() => deleteItem(id, i)}
                                  className="delete-btn"
                                  variant="ghost"
                                  color="red"
                                >
                                  <Trash2Icon size={18} />
                                </Button>
                              </Dialog.Trigger>
                              <Dialog.Content>
                                <Dialog.Title className="dialog-title">
                                  Atenção!
                                </Dialog.Title>
                                <Dialog.Description>
                                  Você deseja realmente excluir este item do
                                  carrinho?
                                </Dialog.Description>
                                <Flex className="flex-container" gap="1">
                                  <Dialog.Close asChild className="dialog-close">
                                    <Button
                                      variant="solid"
                                      color="red"
                                      onClick={() => deleteItem(id, i)}
                                      className="inner-delete-btn"
                                    >
                                      Sim, excluir
                                    </Button>
                                  </Dialog.Close>
                                  <Dialog.Close asChild className="dialog-close">
                                    <Button
                                      variant="soft"
                                      color="gray"
                                      className="inner-delete-btn"
                                    >Não</Button>
                                  </Dialog.Close>
                                </Flex>

                              </Dialog.Content>
                            </Dialog.Root>
                          </Flex>
                        </Table.Cell>
                      </Table.Row>
                    )
                  );
                }
              )}
          </TableContainer>
        </PageSection>
      </Main>
    </>
  );
}
