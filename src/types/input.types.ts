// Input inerface
export interface Input {
  id: string;
  label?: string;
  type?: string;
  name?: string;
  checked?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
