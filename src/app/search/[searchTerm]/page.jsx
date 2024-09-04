import Results from "@/app/components/Results";

export default async function Seachpage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&includ_adult=false`
  );
  const data = await res.json();
  const result = data.results;
  return (
    <div>
      {result &&
        result.length ===
        <h1 className="text-center pt-6 ">No Results Find</h1>}
      {result && <Results results={result} />}
    </div>
  );
}
