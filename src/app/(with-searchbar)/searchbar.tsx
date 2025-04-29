"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  console.log("q", q);
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSearch = () => {
    if (!search.trim() || q === search) return;
    router.push(`/search?q=${encodeURIComponent(search)}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);
  return (
    <div>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button onClick={onSearch}>검색</button>
    </div>
  );
}
