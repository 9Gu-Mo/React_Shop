import { ReactNode } from "react";

export interface ModalLayout {
  onClick: React.MouseEventHandler<HTMLElement>;
  children: ReactNode;
  title?: ReactNode;
}
