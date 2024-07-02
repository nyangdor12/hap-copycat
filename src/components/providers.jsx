"use client";

import CartListProvider from "./cartlist-hooks";

export function Providers({ children }) {
  return (
    <CartListProvider>
      {children}
    </CartListProvider>
  );
}