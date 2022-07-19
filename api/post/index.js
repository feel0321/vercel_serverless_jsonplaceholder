import fetch from 'node-fetch';

// url/api/post 처럼 사용
export default async function postTodo(request, response) {
  if (request.method !== 'POST') {
    return response.status(400).json('method Error');
  }

  const { body } = request;
  const res = await fetch(process.env.BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return response.status(200).json(data);
}
