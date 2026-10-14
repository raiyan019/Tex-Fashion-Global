import { apiRequest, isApiConfigured } from "./api.js";

// Sends an inquiry to your future backend (POST {VITE_API_BASE_URL}/inquiries).
// Until VITE_API_BASE_URL is set it throws NOT_CONFIGURED, so the UI never
// claims a message was sent when nothing actually left the browser.
export async function submitInquiry(data) {
  if (!isApiConfigured) {
    const error = new Error("Inquiry API is not configured");
    error.code = "NOT_CONFIGURED";
    throw error;
  }

  return apiRequest("/inquiries", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
