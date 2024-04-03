import * as Form from "@radix-ui/react-form";
import "./style.css";

export const FormField = ({
  name,
  label,
  messageForMissing,
  messageForMismatch,
  elementRef,
  placeholder,
}) => (
  <Form.Field className={`${name} FormField`} name={name}>
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}
    >
      <Form.Label className="FormLabel">{label}</Form.Label>

      <Form.Message className="FormMessage" match="valueMissing">
        {messageForMissing}
      </Form.Message>

      <Form.Message className="FormMessage" match="typeMismatch">
        {messageForMismatch}
      </Form.Message>

      <Form.Message className="FormMessage" match={(value) => value.length < 8}>
        {messageForMismatch}
      </Form.Message>
    </div>
    <Form.Control type={name} asChild>
      <input placeholder={placeholder} ref={elementRef} className={`${name} Input`} type={name} required />
    </Form.Control>
  </Form.Field>
);
