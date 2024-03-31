import "./style.css";

import { Logo } from "../Logo";
import { Input } from "../Input";
import { CartLink } from "../CartLink";

import searchImg from "../../assets/search-icon.png"

const SearchField = () => {
    return (
        <div className="search-container">
            <div className="search-field">
                <Input category="search" label="O que está procurando?" />
                <button className="search-btn">
                    <img className="search-icon" src={searchImg} alt="search   icon" />
                </button>
            </div>
        </div>
    )
}

export function Header({ count }) {

    return (
        <header className="header">
            <Logo />
            <SearchField />
            <CartLink count={count} />
        </header>
    )
}