import SearchBar from "@/app/(with-searchbar)/searchbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
