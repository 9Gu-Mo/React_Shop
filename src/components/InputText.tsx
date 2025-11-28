// interface
import { Input } from "../types/input.types";

// style
import "@/src/styles/layout/input.scss";

export default function InputText(props: Input) {
  return (
    <>
      <input className="inp" {...props} />
    </>
  );
}
