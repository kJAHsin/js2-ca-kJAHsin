import { API_KEY } from "./constants.js";
import { loadData } from "./storage/load.js";

export function headers() {
  const headers = new Headers();
  const accessToken = loadData('accessToken');

  if (API_KEY) {
    headers.append('X-Noroff-API-Key', API_KEY);
  } else {
    console.error('OH NO! No API key added!')
  }

  if (accessToken) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }

  headers.append('Content-Type', 'application/json')

  return headers;
}
