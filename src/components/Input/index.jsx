import "./style.css";

export function Input({ category, label }) {
    return (
        <input className={`${category} input`} type={category} placeholder={label} />
    )
}