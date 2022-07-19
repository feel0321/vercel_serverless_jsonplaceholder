import fetch from 'node-fetch';

// url/api/get/1
export default async function getTodo(request, response) {
  const { id } = request.query;
  const res = await fetch(`${process.env.BASE_URL}/${id}`);
  const data = await res.json();
  return response.status(200).json(data);
}
