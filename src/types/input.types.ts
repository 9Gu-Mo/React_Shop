// Input inerface
export interface Input {
  id: string;
  type?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
