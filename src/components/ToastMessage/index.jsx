import "./style.css";

import { Flex, Button } from "@radix-ui/themes";

import { ShoppingCartIcon } from "lucide-react";

export function ToastMessage(itemName, itemCode, itemImgSrc) {

  return (
    <div className="toast">
      <Flex gap="2" align={"center"}>
        <img className="toast-img" src={itemImgSrc} />
        <div className="toast-info">
          {/* <p className="toast-name">
            <strong>{itemName}</strong>
          </p> */}
          {/* <p className="toast-code">{itemCode}</p> */}
          <p> foi adicionado ao carrinho</p>
        </div>
      </Flex>
      <Flex>
        <a className="toast-link" href="/meu-carrinho">
          <Button className="toast-btn" variant="solid" color="green">
            Ver Carrinho <ShoppingCartIcon className="toast-icon" size={16} />
          </Button>
        </a>
      </Flex>
      {/* <button>Retry</button> */}
      {/* <button onClick={closeToast}>Close</button> */}
    </div>
  );
}
