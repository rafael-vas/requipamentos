import "./style.css";

import { Table } from "@radix-ui/themes";

export function TableRowHeader({ name, description, code, imgSrc }) {
  return (
    <Table.RowHeaderCell>
      <div className="wrapper">
        <img width={48} height={48} src={imgSrc} alt="foto de equipamento" />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-description">{description}</p>
          <p className="product-code">{code}</p>
        </div>
      </div>
    </Table.RowHeaderCell>
  );
}
