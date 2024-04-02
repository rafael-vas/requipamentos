import "./style.css";

import { Select } from "@radix-ui/themes";

const selectItems = [];
for (let i = 1; i <= 50; i++) selectItems.push(i)

export function SelectField(
    { onValueChange, quantity, label, items = selectItems }
) {
  return (
    <Select.Root
      onValueChange={onValueChange}
      defaultValue={quantity}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>{label}</Select.Label>
          {items.map(item => {
                return (
                    <Select.Item key={item} value={item}>
                        {item}
                    </Select.Item>
                )
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
