"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="search kerbords"
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 border-[1px] border-gray-200 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-200   rounded-sm"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
