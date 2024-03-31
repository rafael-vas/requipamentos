import "./style.css";

export function Menu({ children }) {
    return (
        <nav className="navbar">
            <ul className="menu">
                {children}
            </ul>
        </nav>
    )
}