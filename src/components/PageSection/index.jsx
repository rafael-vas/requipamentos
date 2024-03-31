import "./style.css";

export function PageSection({ name='', children }) {
    return (
        <section className={`${name} section`}>
            {children}
        </section>
    )
}