import { apiPost } from "@/lib/httpClient";

const CONTACT_URL = "/client/v1/contact/send-email";

export interface ContactFormRequest {
  department: string;
  fullName: string;
  position?: string;
  company?: string;
  address?: string;
  email: string;
  website?: string;
  phone: string;
  mobile?: string;
  fax?: string;
  subject: string;
  message: string;
  filePath?: string | null;
}

export interface ContactFormResponse {
  success: boolean;
  data?: {
    id?: string;
    message?: string;
  } | null;
  error?: {
    message?: string;
  } | null;
}

export async function submitContactForm(request: ContactFormRequest): Promise<ContactFormResponse> {
  try {
    const response = await apiPost<ContactFormResponse>(CONTACT_URL, request, {
      skipAuth: true, // Contact form doesn't require authentication
    });
    return response;
  } catch (error) {
    return {
      success: false,
      error: { message: error instanceof Error ? error.message : "Submit failed" },
    };
  }
}
