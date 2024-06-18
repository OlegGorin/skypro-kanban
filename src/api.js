const pathApi = "https://wedev-api.sky.pro/api/kanban";
const pathLogin = "https://wedev-api.sky.pro/api/user";

// export async function onLoginFetch({ login, password }) {
//   const response = await fetch(pathApi, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: "POST",
//     body: JSON.stringify({
//       login: login,
//       password: password,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("Ошибка сервера");
//   }

//   const data = await response.json();
//   return data;
// }

export async function addCard({ token, title, topic, status, description, date }) {
  const response = await fetch(pathApi, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (!response.ok & (response.status === 500)) {
    throw new Error("Ошибка сервера");
  } else if (response.status === 400) {
    throw new Error("Плохой запрос");
  } else if (!response.ok & (response.status === 401)) {
    throw new Error("Пользователь не найден");
  }

  const data = await response.json();
  return data;
}

export async function deleteCard({ token }, id) {
  const response = await fetch(`${pathApi}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok & (response.status === 500)) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function regUser({ name, login, password }) {
  const response = await fetch(pathLogin, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  if (!response.ok & (response.status === 400)) {
    throw new Error("Такой пользователь уже существует");
  }

  const data = await response.json();
  return data;
}

export async function loginUser({ login, password }) {
  const response = await fetch(pathLogin + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  if (!response.ok & (response.status === 400)) {
    throw new Error("Неверный логин или пароль");
  } else if (!response.ok & (response.status === 500)) {
    throw new Error("Ошибка соединения");
  } 

  const data = await response.json();
  return data;
}

export async function getCards({ token }) {
  const response = await fetch(pathApi, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok & (response.status === 500)) {
    throw new Error("Ошибка соединения");
  }

  const data = await response.json();
  return data;
}
