export const getTodos = async () => {
  const response = await fetch('/api/get');
  const result = response.json();
  return result;
};

export const getTodo = async (id) => {
  const response = await fetch(`/api/get/${id}`);
  const result = response.json();
  return result;
};

export const postTodo = async () => {
  const response = await fetch('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      title: 'new Todo',
      completed: true,
    }),
  });
  const result = response.json();
  return result;
};

export const updateTodo = async (id) => {
  const response = await fetch(`/api/put/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      id,
      title: 'change Todo',
      completed: true,
    }),
  });
  const result = response.json();
  return result;
};
