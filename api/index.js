import fetch from 'node-fetch';

// url/api 처럼 사용
export default async function handler(request, response) {
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();
  return response.status(200).json({ data });
}
