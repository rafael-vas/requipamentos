import "./style.css";

export function NavLink({ icon, label, active }) {

  return (
    <li>
      <a
        className={`link${active ? " active" : ""}`}
        href={`/${label}`}
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
}