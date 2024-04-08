import "./style.css";

const categories = [
    "Todos",
    "Padaria",
    "Açougue",
    "Supermercado",
    "Sorveteria",
    "Bar e Restaurante"
];

export function Filter() {
    return (
        <div className="filter">
            <h3 className="filter-title">Categorias</h3>
            <ul className="filter-list">
                {
                  categories.map((item, i) => {
                    return <li key={i} className="filter-item">{item}</li>
                  })
                }
            </ul>
        </div>
    )
}