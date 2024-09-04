import next from "next";
import Results from "./components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTopRated";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=a361397302095a5e4a5f80182e5c364f&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  const results = data.results;

  return (
    <h1>
      <Results results={results} />
    </h1>
  );
}
