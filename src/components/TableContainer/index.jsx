import "./style.css";

import { Table } from "@radix-ui/themes";

const cartTableHeaders = ["Produto", "Quantidade", "Fabricante"];

export function TableContainer({ tableHeaders = cartTableHeaders, children }) {
  return (
    <Table.Root variant="surface" size={1}>
      <Table.Header>
        <Table.Row>
          {tableHeaders.map((tableHeader, i) => {
            return (
              <Table.ColumnHeaderCell key={i + tableHeader}>
                <span className="table-header-text">{tableHeader}</span>
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {children}
      </Table.Body>
    </Table.Root>
  );
}
