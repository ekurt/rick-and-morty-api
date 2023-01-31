async function fetchData(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();

  return data;
}

export default async function Page(req, res) {
  const id = req.query.id;
  const data = await fetchData(id);
  res.status(200).json(data);
}
