import * as Form from "@radix-ui/react-form";
import "./style.css";

import { LoaderCircle } from "lucide-react"

export function FormContainer({ children, submitLabel, onSubmit, isLoading }) {
  return (
    <Form.Root onSubmit={onSubmit} className="FormRoot">
      {children}
      <Form.Submit asChild>
        <button disabled={isLoading} className="Button">
          {isLoading ? <LoaderCircle className="loader-icon" /> : submitLabel }
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
