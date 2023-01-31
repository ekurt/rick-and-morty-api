async function fetchData(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();

  return data;
}

export default async function Page(req, res) {
  const page = req.query.page;
  const data = await fetchData(page);
  res.status(200).json(data);
}
