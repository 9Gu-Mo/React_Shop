"use client";

// component
import IconClose from "../icon/IconClose";

// interface
import { ModalLayout } from "@/src/types/layout.types";

// style
import "@/src/styles/layout/modal.scss";

export default function Modal(props: ModalLayout) {
  const onClickBlock = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="modal fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/50"
        onClick={props.onClick}
      >
        <div
          className="modal-wrap relative min-h-[90px] w-[90vw] max-w-[700px] overflow-hidden rounded-2xl bg-white"
          onClick={onClickBlock}
        >
          <div className="modal-title">
            {props.titleNone ? "" : <b>{props.title}</b>}
            <button className="test absolute right-3 top-3" type="button" onClick={props.onClick}>
              <IconClose />
            </button>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
}
