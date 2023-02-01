import BackToHome from "@/components/BackToHome";
import CharacterDetail from "@/components/CharacterDetail";

export const dynamic = "force-dynamic",
  dynamicParams = true,
  revalidate = true;

async function fetchData(slug) {
  const id = slug.split("-").pop();
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    { next: { revalidate: 86400 } }
  );
  const data = await response.json();

  return data;
}

export default async function Home(req) {
  const data = await fetchData(req.params.slug);
  const page = req.searchParams.page;

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <BackToHome page={page} />
        <CharacterDetail {...data} />
      </div>
    </>
  );
}
