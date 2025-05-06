import Searchbar from "@/components/searchbar";
import { ReactNode, Suspense } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>데이터를 불러오는 중입니다...</div>}>
        <Searchbar />
      </Suspense>

      {children}
    </div>
  );
}
