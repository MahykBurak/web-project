export const fetcher = (url: string, body?: RequestInit) =>
  fetch(url, body).then((res) => res.json())
