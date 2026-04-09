const API_URL = "http://localhost:8000";

export const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const isForm = options.isForm || false;

  const headers = {
    ...(isForm
      ? { "Content-Type": "application/x-www-form-urlencoded" }
      : { "Content-Type": "application/json" }),
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  return res.json();
};