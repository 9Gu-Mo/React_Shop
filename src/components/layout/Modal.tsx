"use client";

// component
import IconClose from "../icon/IconClose";

// interface
import { ModalLayout } from "@/src/types/layout.types";

export default function Modal(props: ModalLayout) {
  const onClickBlock = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/50"
        onClick={props.onClick}
      >
        <div
          className="relative min-h-[90px] w-[90vw] max-w-[700px] overflow-hidden rounded-2xl bg-white"
          onClick={onClickBlock}
        >
          {props.titleNone && (
            <div className="h-[50px] p-2">
              {props.title && <div>{props.title}</div>}
            </div>
          )}
          <button
            className="absolute right-3 top-3"
            type="button"
            onClick={props.onClick}
          >
            <IconClose />
          </button>
          {props.children}
        </div>
      </div>
    </>
  );
}
