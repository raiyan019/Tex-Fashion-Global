const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

// True once VITE_API_BASE_URL is set in your .env file.
export const isApiConfigured = API_BASE_URL !== "";

export async function apiRequest(path, { headers, ...options } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...headers },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}
