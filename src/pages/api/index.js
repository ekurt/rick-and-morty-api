async function fetchData() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data;
}

export default async function Page(req, res) {
  const data = await fetchData();
  res.status(200).json(data);
}
