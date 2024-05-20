import "./style.css";

const categories = [
    {id: 1, label: "todos", title: ""},
    {id: 2, label: "padaria", title: "padaria"},
    {id: 3, label: "açougue", title: "acougue"},
    {id: 4, label: "supermercado", title: "supermercado"},
    {id: 5, label: "lanchonete", title: "lanchonete"},
    {id: 6, label: "farmácia", title: "farmacia"},
    {id: 7, label: "bar e restaurante", title: "restaurante"},
];

export function Filter() {

    function handleActivateFilter(e) {
        const selectedCategory = e.currentTarget.title;
        activateFilterItem(e)
        filterByCategory(selectedCategory)
    }

    function activateFilterItem(e) {
        const $categoryElements = document.querySelectorAll(".filter .filter-item");
        const selectedCategoryElement = e.currentTarget;

        $categoryElements.forEach(item => {
            item === selectedCategoryElement ?
            item.classList.add("active")
            :
            item.classList.contains("active") && item.classList.remove("active")
        })
    }

    function filterByCategory(category) {
        const $cards = document.querySelectorAll(".product.section .card");
        $cards.forEach(card =>{
            category === "" ?
                card.classList.contains("hidden") && card.classList.remove("hidden")
            :
                card.dataset.category === category ?
                card.classList.contains("hidden") && card.classList.remove("hidden")
                :
                card.classList.add("hidden")
        })

    }

    return (
        <div className="filter">
            <h3 className="filter-title">Categorias</h3>
            <ul className="filter-list">
                {
                  categories.map( ({ id, label, title }) => {
                    return (
                        <li
                         title={title}
                         onClick={(e) => handleActivateFilter(e)}
                         key={id}
                         className={`
                            ${title ? "filter-item" : "filter-item active"}
                         `}>
                            {label}
                        </li>
                    )
                  })
                }
            </ul>
        </div>
    )
}