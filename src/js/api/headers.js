import { API_KEY } from "./constants.js";
import { loadData } from "./storage/load.js";

export function headers() {
  const headers = new Headers();
  const accessToken = loadData('accessToken');

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (accessToken) {
    headers.append("Authorization", accessToken);
  } else {
    console.error('WHOOPSIE! No access token present.')
  }

  return headers;
}
