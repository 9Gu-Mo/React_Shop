"use client";

import CheckBox from "../ui/CheckBox";

export default function CartItem() {
  return (
    <>
      <div className="cart">
        {/* title */}
        <div className="cart-title">
          <CheckBox id="chkAll" label="전체선택" />
        </div>
        {/* list */}
        <div className="cart-list"></div>
      </div>
    </>
  );
}
