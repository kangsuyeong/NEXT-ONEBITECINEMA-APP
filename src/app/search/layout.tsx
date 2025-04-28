import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>saerchbar Layout</div>
      {children}
    </div>
  );
}
