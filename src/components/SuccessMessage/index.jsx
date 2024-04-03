import "./style.css";

import { Verified } from "lucide-react";

export function SuccessMessage() {
    return (
        <div className="success-container">
            <h3 className="success-title" >Seu orçamento foi registrado!</h3>
            <p className="success-text">Entraremos em contato para dar andamento e finalizar o orçamento em instantes.</p>
            <Verified className="success-icon" size={56} />
        </div>
    )
}