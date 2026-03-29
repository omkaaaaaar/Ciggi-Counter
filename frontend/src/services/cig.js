import { apiFetch } from "./api";

export const addCig = async (count) => {
  return await apiFetch("/cigs/add", {
    method: "POST",
    body: JSON.stringify({
      date: new Date().toISOString().split("T")[0],
      count,
    }),
  });
};

export const getDaily = async () => {
  return await apiFetch("/cigs/daily");
};

export const getMonthly = async (year, month) => {
  return await apiFetch(`/cigs/monthly?year=${year}&month=${month}`);
};