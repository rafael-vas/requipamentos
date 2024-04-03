import "./style.css";

export function PageHeader({ title, of="", text }) {
  return (
    <header className={`page-header ${of}`}>
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </header>
  );
}
