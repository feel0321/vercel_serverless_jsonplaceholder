import fetch from 'node-fetch';

export default async function handler(request, response) {
  console.log('request.query');
  console.log(request.query);

  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();

  console.log('api handler data');
  console.log(data);

  return response.status(200).json({ data });
}
