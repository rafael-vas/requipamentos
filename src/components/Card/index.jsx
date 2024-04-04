import "./style.css";

import { Dialog, Button, Flex } from "@radix-ui/themes";

import { InfoIcon, PackagePlusIcon } from "lucide-react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToastMessage } from "../ToastMessage";

export function Card({
  id,
  name,
  code,
  description,
  category,
  imgSrc,
  maker,
  highlight,
  handleAddCount,
}) {

  // const notify = (itemName) => toast(`${itemName} foi adicionado ao carrinho`);

  const displayMsg = (name, code, imgSrc) => {
    toast(() => ToastMessage(name, code, imgSrc));
    // toast(Msg) would also work
  };

  return (
    <>
      <li className={`card${highlight ? " highlight" : ""}`}>
        <img className="card-img" src={imgSrc} alt="foto de equipamento" />
        <div className="card-info">
          <p className="card-name">{name}</p>
          <p className="card-code">{code}</p>
        </div>
        <Dialog.Root>
          <Flex className="flex-container" gap="1">
            <Dialog.Trigger>
              <Button className="info-btn" variant="soft" color="gray">
                <InfoIcon size={16} />
                <span>Detalhes</span>
              </Button>
            </Dialog.Trigger>
            <Button
              onClick={() => {
                handleAddCount(id, name, code, imgSrc)
                displayMsg(name, code, imgSrc)
              }}
              className="add-btn"
              color="green"
            >
              <PackagePlusIcon size={18} />
              <span>Adicionar</span>
            </Button>
          </Flex>

          <Dialog.Content className="dialog-content">
            <Dialog.Title className="dialog-title">
              {name}
              <span className="dialog-code">{code}</span>
            </Dialog.Title>
              <img src={imgSrc} className="dialog-img" alt="imagem de um produto" />
            <Dialog.Description className="dialog-txt-container" size="2" mt="4">
              <p className="dialog-txt">
                <strong>Descrição</strong>
                {description}
              </p>
              <p className="dialog-txt">
                <strong>Categoria</strong>
                {category}
              </p>
              <p className="dialog-txt">
                <strong>Fabricante</strong>
                {maker}
              </p>

            </Dialog.Description>

            <Dialog.Close className="dialog-close">
              <Button variant="solid" color="gray">
                Fechar
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </li>
    </>
  );
}
