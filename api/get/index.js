import fetch from 'node-fetch';

// url/api/get
export default async function getTodos(request, response) {
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();
  return response.status(200).json(data);
}
