import fetch from 'node-fetch';

// url/api/1 처럼 사용
export default async function handler(request, response) {
  const { page } = request.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${page}`);
  const data = await res.json();
  return response.status(200).json({ data });
}
