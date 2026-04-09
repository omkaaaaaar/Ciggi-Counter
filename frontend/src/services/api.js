const API_URL = "http://localhost:8000";

export const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}${endpoint}`, {
    method: options.method || "GET", // ✅ IMPORTANT
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: options.body,
  });

  const data = await res.json();
  return data;
};