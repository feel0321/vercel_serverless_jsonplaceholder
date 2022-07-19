# vercel_serveless_jsonplaceholder

[vercel 배포 링크](https://vercel-serverless-jsonplaceholder.vercel.app/)로 접속해서 테스트 가능합니다

jsonplaceholder로 테스트하는 vercel serverless 함수 예제입니다

/api/get

- getTodos
- 모든 todo를 가져옵니다

/api/get/{id}

- getTodo
- 특정 todo를 가져옵니다
  ex) /api/get/1

/api/post

- postTodo
- 특정 todo를 추가합니다
- body 필요

/api/put/{id}

- updateTodo
- 특정 todo를 수정합니다
- body 필요
