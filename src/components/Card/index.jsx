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
  categoria,
  imgSrc,
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

          <Dialog.Content maxWidth="450px">
            <Dialog.Title className="dialog-title">{name}</Dialog.Title>

            <Dialog.Description className="dialog-txt" size="2" mb="4">
              {description}
            </Dialog.Description>
            <Dialog.Description className="dialog-txt" size="2" mb="4">
              {categoria}
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
      </li>
    </>
  );
}
