import { apiFetch } from "./api";

export const login = async (email, password) => {
  const data = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  localStorage.setItem("token", data.access_token);
  return data;
};