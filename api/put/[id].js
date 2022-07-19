import fetch from 'node-fetch';

// url/api/put/id 처럼 사용
export default async function updateTodo(request, response) {
  if (request.method !== 'PUT') {
    return response.status(400).json('method Error');
  }

  const { body } = request;
  const { id } = request.query;
  const res = await fetch(`${process.env.BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return response.status(200).json(data);
}
