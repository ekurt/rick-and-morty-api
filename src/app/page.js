import CharacterCard from "@/components/CharacterCard";
import Pagination from "@/components/Pagination";

export const dynamic = "force-dynamic",
  dynamicParams = true,
  revalidate = true;

async function fetchData(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    { next: { revalidate: 86400 } }
  );
  const data = await response.json();

  return data;
}

export default async function Home(req) {
  const page = req.searchParams.page;
  const data = await fetchData(page);
  const { next, prev } = data.info;

  const allCharacters = data.results.map((char) => (
    <CharacterCard key={char.id} {...char} />
  ));

  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center gap-x-8 gap-y-8">
        {allCharacters}
      </div>
      <Pagination next={next} prev={prev} />
    </>
  );
}
