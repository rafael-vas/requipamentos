import "./style.css";

import logoImg from '../../assets/logo.png'

export function Logo() {
    return (
        <a href="/" className="logo-link">
            <img className="logo-img" src={logoImg} alt="logo" />
            <h1 className="logo-txt"><span className="highlight">re</span>quipamentos</h1>
        </a>
    )
}