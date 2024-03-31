import "./style.css";

export function PageHeader({ label, of="" }) {
  return (
    <header className={`page-header ${of}`}>
      <h2 className="title">{label}</h2>
    </header>
  );
}
