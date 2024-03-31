import "./style.css";

import { ShoppingCartIcon } from "lucide-react";

export function CartLink({ count = 0 }) {

    return (
        <a href="/meu-carrinho" className="cart-link">
            <ShoppingCartIcon className="cart-icon" size={28} />
            <span className="cart-counter">{count}</span>
        </a>
    )
}