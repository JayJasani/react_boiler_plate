import client from "api/client";

export const login = (params) => {
  const user = {
    ...params,
    "auth-type": "user",
  };

  return client.post(`/api/users/login`, user);
};

export const register = (params) => {
  const user = {
    ...params,
    "auth-type": "user",
  };
  return client.post(`/api/users/register`, user);
};

