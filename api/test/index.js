export default async function handler(request, response) {
  return response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
