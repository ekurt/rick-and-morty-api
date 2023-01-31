import CharacterDetail from "@/components/CharacterDetail";

async function fetchData(slug) {
  const id = slug.split("-").pop();
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();

  return data;
}

export default async function Home({ params }) {
  const data = await fetchData(params.slug);

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <CharacterDetail {...data} />
      </div>
    </>
  );
}
