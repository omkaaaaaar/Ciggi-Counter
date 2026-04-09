import { apiFetch } from "./api";

export const login = async (email, password) => {
  const data = await apiFetch("/auth/login", {
    method: "POST",
    isForm: true,
    body: new URLSearchParams({
      username: email,
      password: password,
    }),
  });

  localStorage.setItem("token", data.access_token);
  return data;
};

export const register = async (email, password) => {
  return await apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};