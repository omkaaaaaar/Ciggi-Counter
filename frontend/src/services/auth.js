import { apiFetch } from "./api";

export const login = async (email, password) => {
  const data = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
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